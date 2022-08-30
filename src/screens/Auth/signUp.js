import { StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginApi } from '../../redux/reducers/user/User.actions';
import DefaultInput from '../../components/DefaultInput';
import DefaultButton from '../../components/DefaultButton';
import Container from '../../components/Container';
import { Formik } from 'formik';
import { signUpvalidate } from '../../utils/validation';
const SignUp = () => {
  const dispatch = useDispatch();
  const login = () => {
    dispatch(loginApi());
  };
  const orientation = useSelector((state) => state.deviceInfo?.orientation);
  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      validate={signUpvalidate}
      onSubmit={(values, { setSubmitting }) => {
        login();
      }}
    >
      {({ values, errors, touch, handleChange, handleBlur, handleSubmit, isValid, dirty }) => (
        <Container subContainerStyle={{ justifyContent: 'center' }}>
          <DefaultInput
            placeholder="Enter  Full Name"
            onChangeText={handleChange('name')}
            error={errors?.name}
          />
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
          <DefaultButton label="Sign up" onPress={handleSubmit} isValid={isValid && dirty} />
        </Container>
      )}
    </Formik>
  );
};

export default SignUp;

const styles = StyleSheet.create({});
