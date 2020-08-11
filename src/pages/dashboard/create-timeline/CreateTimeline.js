import React from 'react';
import {Formik, Form, ErrorMessage, FieldArray, Field} from "formik";
import {Button} from "../../../components/button";

export const CreateTimeline = () => {
    const createTimeline = (timeline) => {
        console.log(timeline);
    };
    return (
        <div className="row">
            <div className="col-7">
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
                                                <div key={item.title}>
                                                    <div className="item-form">
                                                        <div className="item-form__header">
                                                            <h3>TimeLine item</h3>
                                                            <Button type="secondary" onClick={() => arrayHelpers.remove(index)}>
                                                                <i className="fas fa-trash" />
                                                            </Button>
                                                        </div>

                                                        <div className="item-form__body">
                                                            <div className="form-group">
                                                                <Field placeholder="Title" name={`timelineItems[${index}].title`}/>
                                                            </div>
                                                            <div className="form-group">
                                                                <Field placeholder="Year" name={`timelineItems[${index}].year`}/>
                                                            </div>
                                                            <div className="form-group">
                                                                <Field
                                                                    className="form-control"
                                                                    placeholder="Timeline item information"
                                                                    as="textarea"
                                                                    name={`timelineItems[${index}].event`}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                            <Button
                                                type="button"
                                                onClick={() => {arrayHelpers.push({})}}
                                            >
                                                Add new item
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
        </div>
    )
};
