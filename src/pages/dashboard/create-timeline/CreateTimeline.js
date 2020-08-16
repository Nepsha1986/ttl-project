import React, {useState, useRef} from 'react';
import {Formik, Form, ErrorMessage, Field} from "formik";

import {TimeLineSchema} from './TimeLineSchema';
import Modal from "../../../primitives/modal";
import {Button} from "../../../components/button";
import {Alert} from "../../../primitives/alert/Alert";
import {TimeLineItem} from "../../../components/time-line-item";

export const CreateTimeline = () => {
    const [newTimeLine, setNewTimeLine] = useState({
        title: '',
        description: '',
        items: []
    });

    const [modal, setModal] = useState(false);

    const topFormRef = useRef();
    const itemFormRef = useRef();

    return (
        <div className="row">
            <div className="col-12 text-center">
                <h2 className="mb-5">Create new timeline</h2>
                <Formik
                    innerRef={topFormRef}
                    initialValues={{
                        title: '',
                        description: '',
                    }}
                    validationSchema={TimeLineSchema}
                >
                    <Form>
                        <div className="form-group">
                            <Field
                                placeholder="Timeline title"
                                type="text"
                                name="title"
                                id={'title'}
                            />
                            <ErrorMessage name="title">
                                {(msg) => <Alert children={msg} type={"danger"}/>}
                            </ErrorMessage>
                        </div>

                        <div className="form-group">
                            <Field
                                placeholder="Timeline description"
                                className="form-control"
                                as="textarea"
                                id={'description'}
                                name={'description'}
                            />
                            <ErrorMessage name="description">{(msg) => <Alert children={msg}
                                                                              type={"danger"}/>}</ErrorMessage>
                        </div>
                    </Form>
                </Formik>

                <Modal
                    isActive={modal}
                    onClickClose={() => {
                        setModal(false)
                    }}
                    headerSlot={<h2>New item</h2>}
                >
                    <Formik
                        innerRef={itemFormRef}
                        initialValues={{
                            title: '',
                            year: '',
                            content: ''
                        }}
                        onSubmit={(values, {resetForm}) => {
                            if (newTimeLine.items.find(i => i.title === values.title)) {
                                alert("Have same ID");
                                return
                            }
                            setNewTimeLine({
                                ...newTimeLine,
                                items: [
                                    ...newTimeLine.items,
                                    values
                                ]
                            });
                            resetForm({values: ''});
                            setModal(false);
                        }}
                    >
                        <Form>
                            <div className="form-group">
                                <label htmlFor="title">Title</label>
                                <Field type="text" name="title"/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="year">Year</label>
                                <Field type="number" name={'year'}/>
                            </div>
                            <Button
                                type={'submit'}
                            >
                                Add
                            </Button>
                        </Form>
                    </Formik>
                </Modal>

                <div className="timeline-creation">
                    <div className="timeline-creation__items">
                        {newTimeLine.items.map(i => <TimeLineItem key={i.year} year={i.year}/>)}
                    </div>
                    <div className="timeline-creation__button">
                        <Button
                            onClick={() => {
                                setModal(true)
                            }}
                        >
                            Add new item
                        </Button>
                    </div>
                </div>

                <Button
                    utilities="btn--fixed-bottom-right"
                    onClick={() => {
                        setNewTimeLine({
                            ...newTimeLine,
                            ...topFormRef.current.values
                        });
                    }}
                >
                    Submit
                </Button>
            </div>
        </div>
    )
};
