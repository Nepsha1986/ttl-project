import React, {useState} from "react";
import {Link, useHistory} from "react-router-dom";

import './style.scss';
import {Button} from "../button";
import userService from "../../services/userService";
import {useUser} from "../../context/user";

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
            {
                error && (
                    <div>
                        <p>An error has been occurred, please try later.</p>
                        <button type="button" onClick={() => {
                            setError(false)
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
                            history.push('/dashboard')
                        }} className="btn btn-primary">Ok
                        </button>
                    </div>
                )
            }

            {
                !created && !error && (
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
                        </form>
                    </div>
                )
            }
        </div>
    )
};
