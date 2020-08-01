import React from 'react';
import "./style.scss";
import {AuthForm} from "../../components/auth-form";
import {Window} from "../../layouts/Window";

export const Auth = () => {
    return (
        <Window>
            <AuthForm/>
        </Window>
    )
};
