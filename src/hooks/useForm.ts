import { useEffect, useState } from "react";

const useForm = (
  initialValues: any,
  submit: (values: any) => {},
  validations: any
) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (submitting) {
      if (Object.keys(errors).length === 0) {
        submit(values);
      }
      setSubmitting(false);

      setTimeout(() => {
        setErrors({});
      }, 3000);
    }
  }, [errors]);

  const handleChange = (e: any) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (validations) {
      setErrors(validations(values));
    } else {
      setErrors({});
    }
    setSubmitting(true);
  };

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  };
};

export default useForm;
