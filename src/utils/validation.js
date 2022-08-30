export const signUpvalidate = (values, props /* only available when using withFormik */) => {
  const errors = {};
  if (!values.name) {
    errors.name = 'name is Required ';
  } else if (!values.email) {
    errors.email = 'email Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  } else if (!values.password) {
    errors.password = 'Required';
  } else if (values.password.length < 8) {
    errors.password = 'Password length should be greater than 8 ';
  }

  return errors;
};

export const loginValidate = (values, props /* only available when using withFormik */) => {
  const errors = {};
  if (!values.email) {
    errors.email = 'email Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  } else if (!values.password) {
    errors.password = 'Required';
  } else if (values.password.length < 8) {
    errors.password = 'Password length should be greater than 8 ';
  }

  return errors;
};
