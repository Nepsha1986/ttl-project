import React, {createContext, useState, useEffect, useContext} from 'react';
import userService from "../services/userService";

export const UserContext = createContext({});

export const UserProvider = ({children}) => {
    const [userData, setUserData] = useState({});
    const [fetching, setFetching] = useState(true);
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
        userService.getUserData().then(data => {
            setUserData(data);
            setAuthenticated(true);
            setFetching(false);
        }).catch(error => {
            setFetching(false);
            setAuthenticated(false);
            setUserData({});
        });
    }, []);

    return (
        <UserContext.Provider value={
            {
                userData,
                setUserData,
                fetching,
                setFetching,
                authenticated,
                setAuthenticated
            }
        }>
            {children}
        </UserContext.Provider>
    )
};

export const useUser = () => useContext(UserContext);
