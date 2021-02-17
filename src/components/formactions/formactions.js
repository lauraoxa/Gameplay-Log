import {useState} from 'react';

const formActions = (callback, initialState={}, resetOnSubmit=true) => {

  /* introduction of useState-hook, 
  into which user's information input  is saved */
  const [values, setValues] = useState(initialState);

  /* Submit-handler that prevents default action
  and calls for a callback function */
  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();
      }
    callback();
    if (resetOnSubmit) resetValues();
  }

  // Resets form to original state
  const resetValues = () => {
    setValues(initialState);
  }
  
  // Change handler saves field data with its name to a state variable
  const handleChange = (event) => {
    event.persist();
    // Saving input data to a temporary value
    let value = event.target.value;
    // Saving new value to state
    setValues(values => ({...values, [event.target.name]: value}));
  }


  // Upon creation, return handler and state-variable
  return {
    handleSubmit,
    handleChange,
    resetValues,
    setValues,
    values
  };

}

export default formActions;