import React, {useState} from "react";
import {Link} from "react-router-dom";
import userService from "../../services/userService";
import {withRouter} from "react-router";
import './style.scss';
import {Button} from "../button";

const AuthFormInner = ({history}) => {
    const [userData, setUserData] = useState({
        email: '',
        password: ''
    });

    const [error, setError] = useState(false);

    const handleErrors = (response) => {
        if (!response.ok) {
            setError(true);
            throw Error(response.statusText);
        }
        setError(false);
        return response;
    };

    const handleEmailChange = (e) => {
        setUserData({...userData, email: e.target.value});
    };

    const handlePasswordChange = (e) => {
        setUserData({...userData, password: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        userService.login(userData)
            .then(res => handleErrors(res))
            .then((data) => data.json())
            .then(data => {
                console.log(this);

                history.push(`/dashboard`);
                console.log(data)
            })
    };

    return (
        <div className="auth-form">
            <form>
                <div className="auth-form__group">
                    <label htmlFor="email">email</label>
                    <input type="text" id="email" onChange={handleEmailChange}/>
                </div>

                <div className="auth-form__group">
                    <label htmlFor="password">password</label>
                    <input type="password" id="password" onChange={handlePasswordChange}/>
                </div>
                <div className="mb-3">
                    <Link to={"/register"}>Register</Link>
                </div>

                <Button onClick={handleSubmit}>Login</Button>
            </form>

            {error ? <span>Authorisation failed!</span> : null}
        </div>
    )
};

export const AuthForm = withRouter(AuthFormInner);
