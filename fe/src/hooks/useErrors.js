import { useState } from 'react';

export default function useErrors() {
  const [errors, setError] = useState([]);

  function setErrors({ field, message }) {
    const isErrorAlreadyExists = errors.find((error) => error.field === 'email');

    if (isErrorAlreadyExists) {
      return;
    }

    setError((prevState) => [
      ...prevState,
      { field, message },
    ]);
  }

  function removeError(field) {
    setError((prevState) => prevState.filter((error) => error.field !== field));
  }

  function getErrorMessageByFieldName(fieldName) {
    return errors.find((error) => error.field === fieldName)?.message;
  }

  return {
    setErrors,
    removeError,
    getErrorMessageByFieldName,
  };
}
