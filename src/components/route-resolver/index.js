import React, {Component, Fragment} from 'react';
import { Route, Redirect} from 'react-router-dom';
import {useUser} from '../../context/user';
import {Preloader} from "../../primitives/preloader";

export const PrivateRoute = ({component: Component, ...rest}) => {
    const {authenticated, fetching} = useUser();

    console.log(authenticated);
    return (
        <Fragment>
            {
                fetching ? (
                    <Preloader/>
                ) : (
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
            }
        </Fragment>

    );
};
