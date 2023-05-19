import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    // create user email and password
    const createUser =(email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // sing in user email and password
    const signIn =(email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    // sign in Google
    const signInGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }
    // log out
    const logOut =() =>{
        setLoading(true)
        return signOut(auth);
    }


    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            console.log("current user", currentUser);
            setLoading(false);
            return () =>{
                unsubscribe();
            }
        })
    },[])
    const authInfo = {user, createUser, signIn, logOut, signInGoogle, loading}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;