// src/components/FormFill.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";

const FormFill = () => {
  const { id } = useParams();
  const [form, setForm] = useState(null);

  useEffect(() => {
    const fetchForm = async () => {
      const response = await axios.get(`/api/forms/${id}`);
      setForm(response.data);
    };

    fetchForm();
  }, [id]);

  const initialValues = {};

  const validationSchema = Yup.object({});

  if (!form) {
    return <div>Loading...</div>;
  }
  return (
    <div className="form-container">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          axios.post("/api/responses", { formId: id, responses: values });
        }}
      >
        {() => (
          <Form>
            {form.questions.map((question, index) => (
              <div className="question-item" key={index}>
                <label>{question.text}</label>
                {question.type === "single-choice" &&
                  question.options.map((option, optionIndex) => (
                    <div className="option-item" key={optionIndex}>
                      <Field
                        type="radio"
                        name={`responses[${question._id}]`}
                        value={option.text}
                      />
                      <label>{option.text}</label>
                    </div>
                  ))}
                {question.type === "multiple-choice" &&
                  question.options.map((option, optionIndex) => (
                    <div className="option-item" key={optionIndex}>
                      <Field
                        type="checkbox"
                        name={`responses[${question._id}]`}
                        value={option.text}
                      />
                      <label>{option.text}</label>
                    </div>
                  ))}
              </div>
            ))}
            <button type="submit" className="submit-button">
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormFill;
