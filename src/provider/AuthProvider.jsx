import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from "firebase/auth";
import app from '../firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    // create user email and password
    const createUser =(email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }


    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            console.log("current user", currentUser);
            return () =>{
                unsubscribe();
            }
        })
    },[])
    const authInfo = {user, createUser}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;