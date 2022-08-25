import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Login from '../screens/Auth/login';
const AuthStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen name="login" component={Login} options={{ headerShown: false }} />
      </Stack.Navigator>
    </>
  );
};

export default AuthStack;
