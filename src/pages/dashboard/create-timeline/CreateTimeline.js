import React, {useState, useRef} from 'react';
import {Formik, Form, ErrorMessage, Field, FormikHelpers as resetForm} from "formik";
import {Button} from "../../../components/button";

export const CreateTimeline = () => {
    const [newTimeLine, setNewTimeLine] = useState({
        title: '',
        description: '',
        items: []
    });

    const [newItemIsHidden, setNewItemIsHidden] = useState(true);

    const topFormRef = useRef();
    const itemFormRef = useRef();

    return (
        <div className="row">
            <div className="col-7">
                <Formik
                    innerRef={topFormRef}
                    initialValues={{
                        title: '',
                        description: '',
                    }}
                >
                    <Form>
                        <div className="form-group">
                            <label htmlFor="title">Title</label>
                            <Field type="text" name="title"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <Field className="form-control" as="textarea" name={'description'}/>
                        </div>
                    </Form>
                </Formik>

                {newItemIsHidden && <Formik
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
                </Formik>}

                <Button
                    onClick={() => {
                        setNewItemIsHidden(!newItemIsHidden)
                    }}
                >
                    Add new item
                </Button>

                <Button onClick={() => {
                    setNewTimeLine({
                        ...newTimeLine,
                        ...topFormRef.current.values
                    });
                }}>Submit</Button>
            </div>

            <div className="col-5">
                <div className="temporary">
                    <div>{newTimeLine.title}</div>
                    <div>{newTimeLine.description}</div>
                    {newTimeLine.items.map(i => <div key={i.title}>{i.title} - {i.year}</div>)}
                </div>
            </div>
        </div>
    )
};
