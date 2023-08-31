import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';
import Swal from 'sweetalert2';
import "./Final.css"
import Loading from '../Loading/Loading';
import { useNavigate } from 'react-router-dom';

const FinalPage = ({price}) => {
    const navigate = useNavigate()
    const oldPreferences = localStorage.getItem("preferences");
    const preferences = JSON.parse(oldPreferences);
    const { user } = useAuth();
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState("");
    const [clientSecret, setClientSecret] = useState("");
    const [process, setProcess] = useState(false)

    useEffect(() => {
        if (price > 0) {
            axios.post("https://pathan-server.vercel.app/create-payment-intent", { price })
                .then(res => {
                    setClientSecret(res.data.clientSecret);
                })
        }
    }, [price])



    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }

        const { error } = await stripe.createPaymentMethod({
            type: "card",
            card
        })
        if (error) {
            setCardError(error.message)
        }
        else {
            setCardError("")
        }
        setProcess(true);

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || "Unknown",
                    name: user?.displayName || "Anonymous"
                }
            }
        })
        if(confirmError){
            setCardError(confirmError)
        }
        if(paymentIntent?.status === "succeeded"){
            const newPreferences = {
                from: preferences.from,
                to: preferences.to,
                distance: preferences.distance,
                pick: preferences.pick,
                weight:preferences.weight,
                quantity:preferences.quantity,
                url:preferences.url,
                shippingCharge: preferences.shippingCharge,
                type:preferences.type,
                selectedDate:preferences.selectedDate,
                deliveryTime: preferences.deliveryTime,
                deliveryFloors: preferences.deliveryFloors,
                pickFloors: preferences.pickFloors,
                additionalTaka:preferences.additionalTaka,
                email: user.email,
                name: user.displayName,
                paymentIntent: paymentIntent.id
            }
    

            fetch("https://pathan-server.vercel.app/payment", {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(newPreferences)

            })
                .then(res => res.json())
                .then(data => {

                    if (data.insertedId) {
                        Swal.fire({
                            title: 'Success!',
                            text: `Payment succeeded with id ${paymentIntent.id}`,
                            icon: 'success',
                            confirmButtonText: 'Ok'
                        })
                        localStorage.removeItem("preferences");
                        navigate("/dashboard/my-orders")
                    }
                })
        }
        setProcess(false)


    }





    return (
        <section>
            <form onSubmit={handleSubmit} className='flex flex-col'>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },

                        },
                    }}
                />

                <button className='myBtn' type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>

            </form>
            {
                cardError && <p className='font-semibold text-red-600'>{cardError}</p>
            }
            {
                process && <Loading></Loading>
            }
        </section>
    );
};

export default FinalPage;