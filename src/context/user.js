import React, {createContext, useState, useEffect, useContext} from 'react';
import userService from "../services/userService";

export const UserContext = createContext({});

export const UserProvider = ({children}) => {
    const [userData, setUserData] = useState({});

    useEffect(() => {
        userService.getUserData().then(data => {
            setUserData(data);
        });
    }, []);

    return (
        <UserContext.Provider value={userData}>
            {children}
        </UserContext.Provider>
    )
};

export const useUser = () => useContext(UserContext);
