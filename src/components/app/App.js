import React from "react";
import {
    Switch,
    Route, Link,
} from "react-router-dom";

import '../../styles/all.scss';
import './style.scss';

import {Auth} from "../../pages/auth";
import {Home} from "../../pages/home";
import {Register} from "../../pages/register";
import {Dashboard} from "../../pages/dashboard";
import {PrivateRoute} from "../route-resolver";

export const App = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/login" component={Auth}/>
            <Route path="/register" component={Register}/>
            <PrivateRoute path="/dashboard" component={Dashboard}/>
        </Switch>
    )
};
