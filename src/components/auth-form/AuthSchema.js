import * as Yup from "yup";

export const AuthSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email')
        .required('Email is required'),
    password: Yup.string()
        .required('No password provided.')
});
