import React from "react";
import {Link} from "react-router-dom";
import './style.scss';
import {Button} from "../button";

export const AuthForm = () => {
    return (
        <div className="auth-form">
            <form>
                <div className="auth-form__group">
                    <label htmlFor="email">email</label>
                    <input type="text" id="email"/>
                </div>

                <div className="auth-form__group">
                    <label htmlFor="password">password</label>
                    <input type="password" id="password"/>
                </div>
                <div className="mb-3">
                    <Link to={"/register"}>Register</Link>
                </div>

                <Button onClick={()=>{ alert('btn clicked!') }}>Submit</Button>
            </form>
        </div>
    )
};
