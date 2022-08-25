import { StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginApi } from '../../redux/reducers/user/User.actions';
import DefaultInput from '../../components/DefaultInput';
import { wp } from '../../utils/responsive';
import DefaultButton from '../../components/DefaultButton';
import Container from '../../components/Container';

const Login = () => {
  console.log('width', wp(10));
  const [userMail, setUserMail] = useState('');
  const dispatch = useDispatch();
  const login = () => {
    dispatch(loginApi());
  };
  const orientation = useSelector((state) => state.deviceInfo?.orientation);
  return (
    <Container subContainerStyle={{ justifyContent: 'center' }}>
      <DefaultInput placeholder="Enter your email" onChangeText={(text) => setUserMail(text)} />
      <DefaultInput
        placeholder="Enter password"
        onChangeText={(text) => setUserMail(text)}
        secureTextEntry
      />
      <DefaultButton label="Login" onPress={login} />
    </Container>
  );
};

export default Login;

const styles = StyleSheet.create({});
