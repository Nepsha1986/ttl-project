import React, {createContext, useState, useEffect, useContext} from 'react';
import userService from "../services/userService";

export const UserContext = createContext({});

export const UserProvider = ({children}) => {
    const [userData, setUserData] = useState({});
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
        userService.getUserData().then(data => {
            setUserData(data);
        });
    }, []);

    return (
        <UserContext.Provider value={
            {
                userData,
                setUserData,
                authenticated,
                setAuthenticated
            }
        }>
            {children}
        </UserContext.Provider>
    )
};

export const useUser = () => useContext(UserContext);
