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
                    <ul className="sidebar-nav">
                        <li className="sidebar-nav__item">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="sidebar-nav__item">
                            <Link to="/dashboard">Dashboard</Link>
                        </li>
                        <li className="sidebar-nav__item">
                            <Link to="dashboard/new-timeline">New Timeline</Link>
                        </li>
                    </ul>
                </div>

                <div className="app__main">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
