'use client'
import { auth } from '@/app/firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import React, { createContext, useContext, useEffect, useState } from 'react'

const AuthContext = createContext()
export const useAuthContext = () => useContext(AuthContext)

export const AuthContextProvider = ({ children }) => {
    const [user, setuser] = useState(null)
    const [loading, setloading] = useState(true)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setuser(currentUser)
            } else {
                setuser(undefined)
            }
            setloading(false)
        });
        return () => unsubscribe();
    }, []);

    const SignOut = () => {
        signOut(auth)
            .then(() => {
                setuser(null);
                router.push('/'); // Navigate to the home page after signing out
            })
            .catch((error) => {
                console.log(error);
            });
    };
    useEffect(() => { console.log(loading) }, [loading])
    useEffect(() => { console.log(user) }, [user])
    const Value = { user, loading, setuser, SignOut }

    return (
        <AuthContext.Provider value={Value}>
            {children}
        </AuthContext.Provider>
    )

}