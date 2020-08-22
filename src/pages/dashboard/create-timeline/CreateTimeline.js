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
        <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10 col-12">
                <h2 className="mb-2">Create new timeline</h2>
                <hr className="mb-5"/>
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
                            <h5 className="mb-4">Timeline main information</h5>
                            <FormGroup>
                                <label htmlFor="title">Title</label>
                                <Field
                                    placeholder="Timeline title"
                                    className="mb-1"
                                    type="text"
                                    name="title"
                                    id={'title'}
                                />
                                <ErrorMessage name="title">
                                    {(msg) => <Alert children={msg} type={"danger"}/>}
                                </ErrorMessage>
                            </FormGroup>

                            <FormGroup>
                                <label htmlFor="description">Description</label>
                                <Field
                                    placeholder="Timeline description"
                                    className="form-control mb-1"
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
                                            <div key={index} className={'panel mb-3'}>
                                                <div className="panel__header">
                                                    <h3>{values.items[index].title}</h3>
                                                </div>

                                                <div className="panel__body">
                                                    <FormGroup>
                                                        <label htmlFor={`items.${index}.title`}>Line item name</label>
                                                        <Field
                                                            name={`items.${index}.title`}
                                                            id={`items.${index}.title`}
                                                        />
                                                    </FormGroup>

                                                    <FormGroup>
                                                        <label
                                                            htmlFor={`items.${index}.description`}>Description</label>
                                                        <Field
                                                            className="form-control"
                                                            as="textarea"
                                                            name={`items.${index}.description`}
                                                            id={`items.${index}.description`}
                                                        />
                                                    </FormGroup>

                                                    <FormGroup>
                                                        <label htmlFor={`items.${index}.date`}>Date</label>
                                                        <DatePickerField
                                                            name={`items.${index}.date`}
                                                            id={`items.${index}.date`}
                                                        />
                                                    </FormGroup>

                                                    <Button
                                                        utilities={'mr-1'}
                                                        color={"danger"}
                                                        type="button"
                                                        onClick={() => arrayHelpers.remove(index)}
                                                    >
                                                        Remove
                                                    </Button>

                                                    <Button
                                                        color={"primary"}
                                                        type="button"
                                                        onClick={()=>{}}>
                                                        Ok
                                                    </Button>
                                                </div>
                                            </div>
                                        ))}
                                        <Button
                                            type="button"
                                            onClick={() => arrayHelpers.push({title: '', description: ''})}
                                        >
                                            Add new item
                                        </Button>
                                    </FormGroup>
                                )}
                            />

                            <Button utilities={"btn--fixed-bottom-right"} type="submit">Submit</Button>
                        </Form>
                    )}

                </Formik>
            </div>
        </div>
    );
};
