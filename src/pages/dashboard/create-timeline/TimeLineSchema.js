import * as Yup from "yup";

export const TimeLineSchema = Yup.object().shape({
    title: Yup.string()
        .min(4, 'Title have at least 4 characters')
        .max(120, 'Title should have less than 120 characters')
        .required('The field is required'),
    description: Yup.string()
        .required('This field is required')
});
