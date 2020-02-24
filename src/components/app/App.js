import React from "react";
import {
    Switch,
    Route,
} from "react-router-dom";

import {Auth} from "../../pages/auth";
import {Home} from "../../pages/home";

export const App = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route path="/login">
                    <Auth/>
                </Route>
            </Switch>
        </div>
    )
};
