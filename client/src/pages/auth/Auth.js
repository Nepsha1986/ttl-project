import React from 'react';
import "./style.scss";
import {AuthForm} from "../../components/auth-form";

export const Auth = () => {
    return (
        <div className="container">
            <h2>Authentication</h2>

            <AuthForm/>
        </div>
    )
};
