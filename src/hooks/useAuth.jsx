import React,{useContext} from 'react';
import { UserProvider } from '../Auth/Auth';



const useAuth = () => {

    const auth = useContext(UserProvider)
    return auth
};

export default useAuth;