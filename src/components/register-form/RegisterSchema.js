import * as Yup from "yup";

export const RegisterSchema = Yup.object().shape({
    username: Yup.string()
        .min(4, 'User name should have at least 4 characters')
        .max(20, 'User name should have less than 20 characters')
        .required('The field is required'),
    email: Yup.string()
        .email('Invalid email')
        .required('Email is required'),
    password: Yup.string()
        .required('No password provided.')
        .min(6, 'Password should have at least 6 characters')
        .max(20,'Password should have less than 20 characters')
});
