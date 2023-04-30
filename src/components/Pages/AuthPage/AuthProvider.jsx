/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { createContext, useContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from '../../../Config/firebase.config';

const auth = getAuth(app);

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect( () =>{
        const unsubscribed = onAuthStateChanged(auth, loggedUser =>{
            setUser(loggedUser);
            setLoading(false);
        })

        return unsubscribed();
    } ,[])

    const Register = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const Login = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const Logout = () =>{
        setLoading(true);
        return signOut(auth);
    }

    const info = {
        user,
        loading,
        Register,
        Login,
        Logout
    }
    return (
        <AuthContext.Provider value= {info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;