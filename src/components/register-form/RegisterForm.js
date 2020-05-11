import React, { useState } from "react";
import './style.scss';
import {Button} from "../button";

// TODO: rework to formik to handle validation.
export const RegisterForm = () => {
    const [user, setUser] = useState({
        name: "Alex",
        email: '',
        password: ''
    });

    const createUser = (user) => {
        console.log(`Creating user:`, user);
    };

    const handleNameChange = (e) => {
        setUser({...user, name: e.target.value});
    };

    const handleEmailChange = (e) => {
        setUser({...user, email: e.target.value});
    };

    const handlePassChange = (e) => {
        setUser({...user, password: e.target.value});
    };

    return (
        <div className="register-form">
            <form>
                <div className="register-form__group">
                    <label htmlFor="name">name</label>
                    <input
                        type="text"
                        id="name"
                        onChange={handleNameChange}
                    />
                </div>

                <div className="register-form__group">
                    <label htmlFor="email">email</label>
                    <input
                        type="text"
                        id="email"
                        onChange={handleEmailChange}
                    />
                </div>

                <div className="register-form__group">
                    <label htmlFor="password">password</label>
                    <input
                        type="password"
                        id="password"
                        onChange={handlePassChange}
                    />
                </div>


                <Button onClick={(e)=>{ e.preventDefault(); createUser(user) }}>Submit</Button>
            </form>
        </div>
    )
};
