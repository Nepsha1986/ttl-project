import React, {useState} from "react";
import {Link, useHistory} from "react-router-dom";
import {Formik, Field, Form, ErrorMessage} from "formik";

import './style.scss';
import {Button} from "../button";
import userService from "../../services/userService";
import {useUser} from "../../context/user";
import {Alert} from "../../primitives/alert/Alert";
import {RegisterSchema} from "./RegisterSchema";

export const RegisterForm = () => {
    const {setUserData, setAuthenticated} = useUser();
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
                setError(false);
                setCreated(true);
                return data.json();
            })
            .then(data => {
                localStorage.setItem('token', data.token);
                setUserData(data);
                setAuthenticated(true);
                setCreated(true);

                setTimeout(() => {
                    history.push('/')
                }, 3000);
            })
            .catch(err => {
                setError(true);
                setTimeout(() => {
                    setError(false);
                }, 3500);
            });
    };

    return (
        <div className='card'>
            <Formik
                initialValues={{
                    username: '',
                    email: '',
                    password: ''
                }}
                validationSchema={RegisterSchema}
                onSubmit={values => {
                    createUser(values);
                }}>
                <Form>
                    <div className="register-form">
                        <h3>Register</h3>
                        <div className="register-form__group">
                            <label htmlFor="username">name</label>
                            <Field name="username" id="username"/>
                        </div>
                        <ErrorMessage name="username">{(msg) => <Alert children={msg} type={"danger"}/>}</ErrorMessage>

                        <div className="register-form__group">
                            <label htmlFor="email">email</label>
                            <Field name="email" id="email"/>
                        </div>
                        <ErrorMessage name="email">{(msg) => <Alert children={msg} type={"danger"}/>}</ErrorMessage>

                        <div className="register-form__group">
                            <label htmlFor="password">password</label>
                            <Field name="password" id="password" type="password"/>
                        </div>
                        <ErrorMessage name="password">{(msg) => <Alert children={msg} type={"danger"}/>}</ErrorMessage>

                        <Button
                            utilities={'mb-3'}
                            type={'submit'}
                        >
                            Submit
                        </Button>

                        <p>Already have account? <Link to={"/login"}>Login</Link></p>
                        {error && (
                            <Alert type={'danger'}>
                                <p>An error has been occurred, please try later.</p>
                            </Alert>
                        )}

                        {created && !error && (
                            <Alert type={'success'}>
                                <p>User had been created successfully! You'll be redirected to the home page in a few
                                    moments.</p>
                            </Alert>
                        )}
                    </div>
                </Form>
            </Formik>
        </div>
    );
};
