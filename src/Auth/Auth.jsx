import React, { createContext, useEffect, useState } from 'react';
import { app } from '../firebase/firebase.config';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";


export const UserProvider = createContext(null)
const auth = getAuth(app);

const Auth = ({children}) => {
    const [user , setUser] = useState(null);
    const [loading , setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();

    const signUp = (email,password)=>{
setLoading(false);
return createUserWithEmailAndPassword(auth,email,password)

    }
   
    const signIn = (email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)

    }

    const googleIn = () =>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }


    const updateUser = (loggedUser, name, photo) => {
        setLoading(true)
        return updateProfile(loggedUser, {
            displayName: name, photoURL: photo
        })
    }

    const logOut = () => {
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentUser =>{
            setUser(currentUser)

            // TODO
            // if(currentUser){
                
            // }
        })

        return ()=> unsubscribe()
    },[])




const userInfo ={
    user,
    loading,
    signUp,
    signIn,
    googleIn,
    logOut,
    updateUser
}

    return (
        <UserProvider.Provider value={userInfo}>
            {children}
        </UserProvider.Provider>
    );
};

export default Auth;