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
import {Header} from "../header";

export const App = () => {
    return (
        <div className="app">
            <div className="app__header">
                <Header/>
            </div>

            <div className="app__body">
                <div className="app__aside">
                    <Link to="/">Home</Link><br/>
                    <Link to="/dashboard">Dashboard</Link>
                </div>

                <div className="app__main">
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/login" component={Auth} />
                        <Route path="/register" component={Register} />
                        <PrivateRoute path="/dashboard" component={Dashboard} />
                    </Switch>
                </div>
            </div>
        </div>
    )
};
