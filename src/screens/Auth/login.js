import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginApi } from '../../redux/reducers/user/User.actions';
import DefaultInput from '../../components/DefaultInput';
import { wp } from '../../utils/responsive';
import DefaultButton from '../../components/DefaultButton';
import Container from '../../components/Container';
import { Formik } from 'formik';
import { loginValidate } from '../../utils/validation';
import { Colors } from '../../assets/colors';
import { AppStrings } from '../../assets/StringConstant';
const Login = ({ navigation }) => {
  const dispatch = useDispatch();
  const userType = useSelector((state) => state.user?.userType);

  const orientation = useSelector((state) => state.deviceInfo?.orientation);

  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      validate={loginValidate}
      onSubmit={(values, { setSubmitting }) => {
        const { email, password } = values;
        dispatch(loginApi(email, password, userType));
      }}
    >
      {({ values, errors, touch, handleChange, handleBlur, handleSubmit, isValid, dirty }) => (
        <Container>
          <View style={{ flexGrow: 1, justifyContent: 'center' }}>
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
          </View>
          <View style={{ flexDirection: 'row', marginLeft: 'auto', marginRight: 'auto' }}>
            <Text>Don't have account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate(AppStrings.SIGNUP)}>
              <Text style={{ color: Colors.Orange }}> Signup</Text>
            </TouchableOpacity>
          </View>
        </Container>
      )}
    </Formik>
  );
};

export default Login;

const styles = StyleSheet.create({});
