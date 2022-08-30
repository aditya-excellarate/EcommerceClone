import { StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginApi } from '../../redux/reducers/user/User.actions';
import DefaultInput from '../../components/DefaultInput';
import { wp } from '../../utils/responsive';
import DefaultButton from '../../components/DefaultButton';
import Container from '../../components/Container';
import { Formik } from 'formik';
import { loginValidate } from '../../utils/validation';
const Login = () => {
  const dispatch = useDispatch();
  const login = () => {
    dispatch(loginApi());
  };
  const orientation = useSelector((state) => state.deviceInfo?.orientation);

  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      validate={loginValidate}
      onSubmit={(values, { setSubmitting }) => {
        login();
      }}
    >
      {({ values, errors, touch, handleChange, handleBlur, handleSubmit, isValid, dirty }) => (
        <Container subContainerStyle={{ justifyContent: 'center' }}>
          <DefaultInput
            placeholder="Enter  email"
            onChangeText={handleChange('email')}
            error={errors?.email}
          />
          <DefaultInput
            placeholder="Enter password"
            onChangeText={handleChange('password')}
            error={errors?.password}
            secureTextEntry
          />
          <DefaultButton label="Login" onPress={handleSubmit} isValid={isValid && dirty} />
        </Container>
      )}
    </Formik>
  );
};

export default Login;

const styles = StyleSheet.create({});
