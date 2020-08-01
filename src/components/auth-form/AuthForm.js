import React, {useState} from "react";
import {Link} from "react-router-dom";
import userService from "../../services/userService";
import {withRouter} from "react-router";
import './style.scss';
import {Button} from "../button";
import {useUser} from "../../context/user";
import {Alert} from "../../primitives/alert/Alert";

const AuthFormInner = ({history}) => {
    const {setUserData, setAuthenticated} = useUser();
    const [error, setError] = useState(false);

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleErrors = (response) => {
        if (!response.ok) {
            setError(true);
            throw Error(response.body);
        }
        setError(false);
        return response;
    };

    const handleEmailChange = (e) => {
        setFormData({...formData, email: e.target.value});
    };

    const handlePasswordChange = (e) => {
        setFormData({...formData, password: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        userService.login(formData)
            .then(res => handleErrors(res))
            .then((data) => {
                return data.json()
            })
            .then(data => {
                localStorage.setItem('token', data.token);
                setUserData({
                    username: data.name,
                    email: data.email
                });
                setAuthenticated(true);
                history.push(`/dashboard`);
            })
    };

    return (
        <div className='card'>
            <div className="auth-form">
                <h3 className="mb-5">Login</h3>
                <form>
                    <div className="auth-form__group">
                        <label htmlFor="email">email</label>
                        <input type="text" id="email" onChange={handleEmailChange}/>
                    </div>

                    <div className="auth-form__group">
                        <label htmlFor="password">password</label>
                        <input type="password" id="password" onChange={handlePasswordChange}/>
                    </div>
                    <Button utilities={'mb-3'} onClick={handleSubmit}>Login</Button>
                    <div className="mb-3">
                        <Link to={"/register"}>Create new account</Link><span> / </span>
                        <Link to={"/restore-password"}>Forgot your password?</Link>
                    </div>
                </form>

                {error ? <Alert type='danger'>Authorisation failed! Please try later.</Alert> : null}
            </div>
        </div>
    )
};

export const AuthForm = withRouter(AuthFormInner);
