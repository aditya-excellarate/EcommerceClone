import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerApi } from '../../redux/reducers/user/User.actions';
import DefaultInput from '../../components/DefaultInput';
import DefaultButton from '../../components/DefaultButton';
import Container from '../../components/Container';
import { Formik } from 'formik';
import { signUpvalidate } from '../../utils/validation';
import { Colors } from '../../assets/colors';
import { AppStrings } from '../../assets/StringConstant';
const SignUp = () => {
  const dispatch = useDispatch();

  const orientation = useSelector((state) => state.deviceInfo?.orientation);
  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      validate={signUpvalidate}
      onSubmit={(values, { setSubmitting }) => {
        const { name, email, password } = values;
        dispatch(registerApi(name, email, password));
      }}
    >
      {({ values, errors, touch, handleChange, handleBlur, handleSubmit, isValid, dirty }) => (
        <Container subContainerStyle={{ justifyContent: 'center' }}>
          <View style={{ flexGrow: 1, justifyContent: 'center' }}>
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
          </View>
          <View style={{ flexDirection: 'row', marginLeft: 'auto', marginRight: 'auto' }}>
            <Text>Already have account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate(AppStrings.LOGIN)}>
              <Text style={{ color: Colors.Orange }}> Login</Text>
            </TouchableOpacity>
          </View>
        </Container>
      )}
    </Formik>
  );
};

export default SignUp;

const styles = StyleSheet.create({});
