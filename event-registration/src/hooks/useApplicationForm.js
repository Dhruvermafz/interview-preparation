import { useState } from "react";

export const useForm = (initialState, validate) => {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData({
        ...formData,
        additionalSkills: checked
          ? [...formData.additionalSkills, value]
          : formData.additionalSkills.filter((skill) => skill !== value),
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e, callback) => {
    e.preventDefault();
    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      callback();
      setErrors({});
    }
  };

  return {
    formData,
    errors,
    handleChange,
    handleSubmit,
  };
};
