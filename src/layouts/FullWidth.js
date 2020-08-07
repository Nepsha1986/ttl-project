import React from "react";
import {Header} from "../components/header";

export const FullWidth = ({children}) => {
    return (
        <div className="app">
            <div className="app__header">
                <Header/>
            </div>

            <div className="app__body">
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
