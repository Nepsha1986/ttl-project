import React from "react";
import {Header} from "../components/header";
import {Link} from "react-router-dom";

export const WithSidebar = ({children}) => {
    return (
        <div className="app">
            <div className="app__header">
                <Header/>
            </div>

            <div className="app__body">
                <div className="app__aside">
                    <Link to="/">Home</Link>
                    <Link to="/dashboard">Dashboard</Link>
                </div>

                <div className="app__main">
                    {children}
                </div>
            </div>
        </div>
    )
};
