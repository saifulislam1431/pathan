import React, { createContext } from 'react';
import { app } from '../firebase/firebase.config';
import { getAuth } from "firebase/auth";


export const UserProvider = createContext(null)
const auth = getAuth(app);

const Auth = ({children}) => {




const userInfo ={

}

    return (
        <UserProvider.Provider value={userInfo}>
            {children}
        </UserProvider.Provider>
    );
};

export default Auth;