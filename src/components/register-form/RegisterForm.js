import React, {useState} from "react";
import {Link, useHistory} from "react-router-dom";

import './style.scss';
import {Button} from "../button";
import userService from "../../services/userService";
import {useUser} from "../../context/user";
import {Alert} from "../../primitives/alert/Alert";

// TODO: rework to formik to handle validation.
export const RegisterForm = () => {
    const {setUserData, setAuthenticated} = useUser();
    const [newUser, setNewUser] = useState({
        username: '',
        email: '',
        password: ''
    });

    const [created, setCreated] = useState(false);
    const [error, setError] = useState(false);

    const history = useHistory();

    const handleErrors = (response) => {
        if (!response.ok) {
            setError(true);
            throw Error(response.statusText);
        }
        return response;
    };

    const createUser = (user) => {
        userService.createUser(user)
            .then(response => handleErrors(response))
            .then(data => {
                setCreated(true);
                return data.json();
            })
            .then(data => {
                localStorage.setItem('token', data.token);
                console.log(data);
                setUserData(data);
                setAuthenticated(true);
                setCreated(true);

                setTimeout(() => {
                    history.push('/')
                }, 3000);
            })
            .catch(err => setError(true));
    };

    const handleNameChange = (e) => {
        setNewUser({...newUser, username: e.target.value});
    };

    const handleEmailChange = (e) => {
        setNewUser({...newUser, email: e.target.value});
    };

    const handlePassChange = (e) => {
        setNewUser({...newUser, password: e.target.value});
    };

    return (
        <div className='card'>
            <div className="register-form">
                <h3>Register</h3>
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

                    <Button utilities={'mb-3'} onClick={(e) => {
                        e.preventDefault();
                        createUser(newUser)
                    }}>Submit</Button>
                    <p>Already have account? <Link to={"/login"}>Login</Link></p>
                    {error && (
                        <Alert type={'danger'}>
                            <p>An error has been occurred, please try later.</p>
                        </Alert>
                    )}

                    {created && !error && (
                        <Alert type={'success'}>
                            <p>User had been created successfully! You'll be redirected to the home page in a few moments.</p>
                        </Alert>
                    )}
                </form>
            </div>
        </div>
    );
};
