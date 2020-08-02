import React, {Component} from 'react';
import { Route, Redirect} from 'react-router-dom';
import {useUser} from '../../context/user';

export const PrivateRoute = ({component: Component, ...rest}) => {
    const {authenticated} = useUser();

    console.log(authenticated);
    return (
        <Route
            {...rest}
            render={props =>
                authenticated ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login"
                        }}
                    />
                )
            }
        />
    )
};
