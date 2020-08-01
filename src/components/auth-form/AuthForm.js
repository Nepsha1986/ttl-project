import React, {useState} from "react";
import {Link} from "react-router-dom";
import {withRouter} from "react-router";
import * as Yup from 'yup';

import './style.scss';
import userService from "../../services/userService";
import {Button} from "../button";
import {useUser} from "../../context/user";
import {Alert} from "../../primitives/alert/Alert";
import {Formik, Field, Form, ErrorMessage} from 'formik';

const AuthSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email')
        .required('Email is required'),
    password: Yup.string()
        .required('No password provided.')
});

const AuthFormInner = ({history}) => {
    const {setUserData, setAuthenticated} = useUser();
    const [error, setError] = useState(false);

    const handleErrors = (response) => {
        if (!response.ok) {
            setError(true);
            throw Error(response.body);
        }
        setError(false);
        return response;
    };

    const handleSubmit = (userData) => {
        userService.login(userData)
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
            <Formik
                initialValues={{
                    email: '',
                    password: ''
                }}
                validationSchema={AuthSchema}
                onSubmit={values => {
                    handleSubmit(values)
                }}
            >
                <Form className='auth-form'>
                    <h3 className="mb-5">Login</h3>
                    <div className="auth-form__group">
                        <label htmlFor="firstName">email</label>
                        <Field id="email" name="email"/>
                    </div>
                    <ErrorMessage name="email">{(msg) => <Alert children={msg} type={"danger"}/>}</ErrorMessage>

                    <div className="auth-form__group">
                        <label htmlFor="lastName">password</label>
                        <Field type="password" id="password" name="password"/>
                    </div>
                    <ErrorMessage name="password">{(msg) => <Alert children={msg} type={"danger"}/>}</ErrorMessage>

                    <Button
                        utilities={'mb-3'}
                        type={'submit'}
                    >
                        Login
                    </Button>

                    <div className="mb-3">
                        <Link to={"/register"}>Create new account</Link><span> / </span>
                        <Link to={"/restore-password"}>Forgot your password?</Link>
                    </div>
                    {error ? <Alert type='danger'>Authorisation failed! Please check your login data.</Alert> : null}
                </Form>
            </Formik>
        </div>
    )
};

export const AuthForm = withRouter(AuthFormInner);
