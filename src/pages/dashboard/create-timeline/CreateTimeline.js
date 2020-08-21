import React, {useState, useRef, useMemo} from 'react';
import {Formik, Form, ErrorMessage, Field, FieldArray} from "formik";

import {TimeLineSchema} from './TimeLineSchema';
import Modal from "../../../primitives/modal";
import {Button} from "../../../components/button";
import {Alert} from "../../../primitives/alert/Alert";
import {TimeLineItem} from "../../../components/time-line-item";
import {DatePickerField, FormGroup} from "../../../primitives/form-elements";

export const CreateTimeline = () => {
    return (
        <div className="row">
            <div className="col-12">
                <h2 className="mb-5">Create new timeline</h2>
                <Formik
                    initialValues={{
                        title: '',
                        description: '',
                        items: []
                    }}
                    validationSchema={TimeLineSchema}
                    onSubmit={values => {
                        console.log(values);
                    }}
                >
                    {({values}) => (
                        <Form>
                            <FormGroup>
                                <Field
                                    placeholder="Timeline title"
                                    type="text"
                                    name="title"
                                    id={'title'}
                                />
                                <ErrorMessage name="title">
                                    {(msg) => <Alert children={msg} type={"danger"}/>}
                                </ErrorMessage>
                            </FormGroup>

                            <FormGroup>
                                <Field
                                    placeholder="Timeline description"
                                    className="form-control"
                                    as="textarea"
                                    id={'description'}
                                    name={'description'}
                                />
                                <ErrorMessage name="description">
                                    {(msg) => <Alert children={msg} type={"danger"}/>}
                                </ErrorMessage>
                            </FormGroup>

                            <FieldArray
                                name="items"
                                render={arrayHelpers => (
                                    <FormGroup>
                                        {values.items.map((item, index) => (
                                            <div key={index}>
                                                <Field name={`items.${index}.title`}/>
                                                <Field name={`items.${index}.description`}/>
                                                <button type="button" onClick={() => arrayHelpers.remove(index)}>
                                                    -
                                                </button>
                                            </div>
                                        ))}
                                        <button
                                            type="button"
                                            onClick={() => arrayHelpers.push({title: '', description: ''})}
                                        >
                                            +
                                        </button>
                                    </FormGroup>
                                )}
                            />

                            <Button type="submit">Submit</Button>
                        </Form>
                    )}

                </Formik>
            </div>
        </div>
    );
};
