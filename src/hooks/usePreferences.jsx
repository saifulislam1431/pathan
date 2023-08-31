import { useQuery } from '@tanstack/react-query';
import React from 'react';

const usePreferences = () => {
    const{data: preferences = [] , refetch} = useQuery({
        queryKey:["preferences"],
        queryFn: async()=>{
            const res = await JSON.parse(localStorage.getItem("preferences"));
            return res
        }
    })

    return [preferences,refetch]
};

export default usePreferences;