// import React from 'react';
// import useAuth from './useAuth';
// import axios from 'axios';
// import { useQuery } from '@tanstack/react-query';

// const useOrders = () => {
//     const{user , loading} = useAuth();

//     const{data: allOrders =[] ,refetch}=useQuery({
//         queryKey:["allOrders" , user?.email],
//         enabled: !user?.email,
//         queryFn: async()=>{
//             const res = await axios.get(`https://pathan-server.vercel.app/all-orders?email=${user.email}`)
//             return res.data;
//         }
//     })
//     return [allOrders , refetch]
// };

// export default useOrders;