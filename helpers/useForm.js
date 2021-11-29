import { useEffect, useState } from 'react';

export default function useForm(initial = {}) {
  // create a state object for our inputs
  const [inputs, setInputs] = useState(initial);

  const initialValues = Object.values(initial).join('');

  useEffect(() => {
    // This function run when the things, we are watching, change
    setInputs(initial);
  }, [initialValues]);

  function handleChange(e) {
    let { type, name, value } = e.target;
    // change input for price in number type
    if (type === 'number') {
      value = parseInt(value);
    }
    
    // for files input
    if (type === 'file') {
      [value] = e.target.files;
    }

    setInputs({
      // copy the existing state
      ...inputs,
      [name]: value,
    });
  }

  // reset to default
  function resetForm() {
    setInputs(initial);
  }

  // clear form
  function clearForm() {
    // set values in entries array to empty string, after create object from new entries(empty values)
    const blankState = Object.fromEntries(
      Object.entries(inputs).map(([key, value]) => [key, ''])
    );
    setInputs(blankState);
  }

  // return the things we want to surface from this custom hook
  return {
    inputs,
    handleChange,
    resetForm,
    clearForm,
  };
}
