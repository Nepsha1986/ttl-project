import React from 'react';
import "./style.scss";
import {RegisterForm} from "../../components/register-form";
import {Window} from "../../layouts";
import {Link} from "react-router-dom";

export const Register = () => {
    return (
        <Window>
            <h1 className='mb-3'><Link to={'/'} className={"text-decoration-none"}>Timeline</Link></h1>
            <RegisterForm/>
        </Window>
    )
};
