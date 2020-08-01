import React from 'react';
import "./style.scss";
import {RegisterForm} from "../../components/register-form";
import {Window} from "../../layouts/Window";

export const Register = () => {
    return (
        <Window>
            <div className="container">
                <h2>Register</h2>

                <RegisterForm/>
            </div>
        </Window>
    )
};
