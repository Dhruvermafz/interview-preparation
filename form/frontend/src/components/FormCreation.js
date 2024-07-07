// src/components/FormCreation.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createForm } from "../features/forms/formSlice";
import { Formik, Field, Form, FieldArray } from "formik";
import * as Yup from "yup";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import {
  Container,
  Row,
  Col,
  Form as BootstrapForm,
  Button,
} from "react-bootstrap";

const FormCreation = () => {
  const dispatch = useDispatch();
  const [questions, setQuestions] = useState([]);

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(questions);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setQuestions(items);
  };

  const initialValues = {
    title: "",
    questions: [],
  };

  const validationSchema = Yup.object({
    title: Yup.string().required("Required"),
    questions: Yup.array().of(
      Yup.object({
        text: Yup.string().required("Required"),
        type: Yup.string()
          .oneOf(["single-choice", "multiple-choice"])
          .required("Required"),
        options: Yup.array().of(
          Yup.object({
            text: Yup.string().required("Required"),
          })
        ),
      })
    ),
  });

  return (
    <Container className="form-container">
      <Row>
        <Col>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              dispatch(createForm(values));
            }}
          >
            {({ values }) => (
              <Form as={BootstrapForm}>
                <BootstrapForm.Group controlId="formTitle">
                  <BootstrapForm.Label>Form Title</BootstrapForm.Label>
                  <Field
                    name="title"
                    placeholder="Form Title"
                    className="form-control"
                  />
                </BootstrapForm.Group>
                <FieldArray name="questions">
                  {({ push, remove }) => (
                    <>
                      <DragDropContext onDragEnd={onDragEnd}>
                        <Droppable droppableId="questions">
                          {(provided) => (
                            <div
                              {...provided.droppableProps}
                              ref={provided.innerRef}
                            >
                              {questions.map((question, index) => (
                                <Draggable
                                  key={index}
                                  draggableId={`question-${index}`}
                                  index={index}
                                >
                                  {(provided) => (
                                    <div
                                      ref={provided.innerRef}
                                      {...provided.draggableProps}
                                      {...provided.dragHandleProps}
                                      className="question-item"
                                    >
                                      <BootstrapForm.Group>
                                        <BootstrapForm.Label>
                                          Question Text
                                        </BootstrapForm.Label>
                                        <Field
                                          name={`questions[${index}].text`}
                                          placeholder="Question Text"
                                          className="form-control"
                                        />
                                      </BootstrapForm.Group>
                                      <BootstrapForm.Group>
                                        <BootstrapForm.Label>
                                          Question Type
                                        </BootstrapForm.Label>
                                        <Field
                                          as="select"
                                          name={`questions[${index}].type`}
                                          className="form-control"
                                        >
                                          <option value="">
                                            Select Question Type
                                          </option>
                                          <option value="single-choice">
                                            Single Choice
                                          </option>
                                          <option value="multiple-choice">
                                            Multiple Choice
                                          </option>
                                        </Field>
                                      </BootstrapForm.Group>
                                      <FieldArray
                                        name={`questions[${index}].options`}
                                      >
                                        {({ push, remove }) => (
                                          <>
                                            {question.options.map(
                                              (option, optionIndex) => (
                                                <div
                                                  className="option-item"
                                                  key={optionIndex}
                                                >
                                                  <Field
                                                    name={`questions[${index}].options[${optionIndex}].text`}
                                                    placeholder="Option Text"
                                                    className="form-control"
                                                  />
                                                  <button
                                                    type="button"
                                                    className="remove-option-button"
                                                    onClick={() =>
                                                      remove(optionIndex)
                                                    }
                                                  >
                                                    &times;
                                                  </button>
                                                </div>
                                              )
                                            )}
                                            <Button
                                              type="button"
                                              className="add-button"
                                              onClick={() => push({ text: "" })}
                                            >
                                              Add Option
                                            </Button>
                                          </>
                                        )}
                                      </FieldArray>
                                      <Button
                                        variant="danger"
                                        type="button"
                                        className="remove-button"
                                        onClick={() => remove(index)}
                                      >
                                        Remove Question
                                      </Button>
                                    </div>
                                  )}
                                </Draggable>
                              ))}
                              {provided.placeholder}
                            </div>
                          )}
                        </Droppable>
                      </DragDropContext>
                      <Button
                        type="button"
                        className="add-button"
                        onClick={() =>
                          push({ text: "", type: "", options: [] })
                        }
                      >
                        Add Question
                      </Button>
                    </>
                  )}
                </FieldArray>
                <Button type="submit" className="submit-button">
                  Save Form
                </Button>
              </Form>
            )}
          </Formik>
        </Col>
      </Row>
    </Container>
  );
};

export default FormCreation;
