import React from 'react';
import "./style.scss";
import {RegisterForm} from "../../components/register-form";

export const Register = () => {
    return (
        <div className="container">
            <h2>Register</h2>

            <RegisterForm/>
        </div>
    )
};
