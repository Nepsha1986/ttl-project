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
import {Header} from "../header";

export const App = () => {
    return (
        <div className="app">
            <div className="app__header">
                <Header/>
            </div>

            <div className="app__body">
                <div className="app__aside">
                    <Link to="/">Home</Link>
                </div>

                <div className="app__main">
                    <Switch>
                        <Route exact path="/">
                            <Home/>
                        </Route>
                        <Route path="/login">
                            <Auth/>
                        </Route>
                        <Route path="/register">
                            <Register/>
                        </Route>
                        <Route path="/dashboard">
                            <Dashboard/>
                        </Route>
                    </Switch>
                </div>
            </div>
        </div>
    )
};
