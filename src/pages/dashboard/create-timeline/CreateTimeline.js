import React from 'react';
import {Formik, Form, ErrorMessage, FieldArray, Field} from "formik";
import {Button} from "../../../components/button";

export const CreateTimeline = () => {
    const createTimeline = (timeline) => {
        console.log(timeline);
    };
    return (
        <div>
            <Formik
                initialValues={{
                    timelineTitle: '',
                    timelineDesc: '',
                    timelineItems: [],
                }}
                onSubmit={(values) => {
                    createTimeline(values);
                }}
                render={({values}) => (
                    <Form>
                        <div className="form-group">
                            <label htmlFor="timelineTitle">Title</label>
                            <Field type="text" name="timelineTitle"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="timelineDesc">Description</label>
                            <Field className="form-control" as="textarea" name={'timelineDesc'}/>
                        </div>

                        <div className="form-group">
                            <FieldArray
                                name="timelineItems"
                                render={arrayHelpers => (
                                    <div>
                                        {values.timelineItems.map((item, index) => (
                                            <div key={index}>
                                                <Field name={`timelineItems[${index}].title`}/>
                                                <Button type="secondary" onClick={() => arrayHelpers.remove(index)}>
                                                    -
                                                </Button>
                                            </div>
                                        ))}
                                        <Button
                                            type="button"
                                            onClick={() => {arrayHelpers.push({})}}
                                        >
                                            +
                                        </Button>
                                    </div>
                                )}
                            />
                        </div>

                        <Button type={'submit'}>Submit</Button>
                    </Form>
                )}
            />
        </div>
    )
};
