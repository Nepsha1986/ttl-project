import React, {useState} from "react";
import {useHistory} from "react-router-dom";

import './style.scss';
import {Button} from "../button";
import userService from "../../services/userService";

// TODO: rework to formik to handle validation.
export const RegisterForm = () => {
    const [user, setUser] = useState({
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
                setCreated(true);
            })
            .catch(err => setError(true));
    };

    const handleNameChange = (e) => {
        setUser({...user, username: e.target.value});
    };

    const handleEmailChange = (e) => {
        setUser({...user, email: e.target.value});
    };

    const handlePassChange = (e) => {
        setUser({...user, password: e.target.value});
    };

    return (
        <div>
            {
                error && (
                    <div>
                        <p>An error has been occurred, please try later.</p>
                        <button type="button" onClick={() => {
                            history.push('/')
                        }} className="btn btn-primary">Ok
                        </button>
                    </div>
                )
            }

            {
                created && !error && (
                    <div>
                        <p>User had been created successfully!</p>
                        <button type="button" onClick={() => {
                            history.push('/login')
                        }} className="btn btn-primary">Ok
                        </button>
                    </div>
                )
            }

            {
                !created && !error && (
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

                            <Button onClick={(e) => {
                                e.preventDefault();
                                createUser(user)
                            }}>Submit</Button>
                        </form>
                    </div>
                )
            }
        </div>
    )
};
