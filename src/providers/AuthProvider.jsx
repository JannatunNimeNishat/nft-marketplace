import { createContext, useEffect, useState } from "react";
import { set } from "react-hook-form";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);


    const registerNewUser = (newUser) => {
        setLoading(true);
        return fetch('http://localhost:5001/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
    }

    const signIn = (data) => {
        setLoading(true);
        return fetch('http://localhost:5001/users/login', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
    }

    const logout = () => {
        setLoading(true);
        return fetch('http://localhost:5001/users/logout', {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        })
    }

    const handleLoading = (value) => {
        setLoading(value);
    }

    useEffect(() => {
        const getUser = () => {
            // fetch('http://localhost:5001/users/checkLogin', {
            fetch('http://localhost:5001/checkLogin', {
                method: 'GET',
                headers: {
                    'content-type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => console.log(data))
        }
        // getUser();
    }, [])

    const checkLogin = ()=>{
        fetch('http://localhost:5001/checkLogin', {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }

    const data = {
        user,
        loading,
        handleLoading,
        registerNewUser,
        signIn,
        logout,
        checkLogin
    }
    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

