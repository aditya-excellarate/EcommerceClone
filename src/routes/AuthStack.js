import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { useSelector } from 'react-redux';
import { AppStrings } from '../assets/StringConstant';
import AppIntro from '../screens/Auth/appIntro';
import ChooseUser from '../screens/Auth/chooseUser';
import Login from '../screens/Auth/login';
import SignUp from '../screens/Auth/signUp';
const AuthStack = () => {
  const Stack = createNativeStackNavigator();
  const intro = useSelector((state) => state?.user?.intro);
  const userType = useSelector((state) => state?.user?.userType);
  return (
    <>
      <Stack.Navigator initialRouteName={AppStrings.APPINTRO}>
        {!intro ? (
          <Stack.Screen
            name={AppStrings.APPINTRO}
            component={AppIntro}
            options={{ headerShown: false }}
          />
        ) : userType === null ? (
          <Stack.Screen
            name={AppStrings.CHOOSEUSER}
            component={ChooseUser}
            options={{ headerShown: false }}
          />
        ) : (
          <>
            <Stack.Screen
              name={AppStrings.LOGIN}
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name={AppStrings.SIGNUP}
              component={SignUp}
              options={{ headerShown: false }}
            />
          </>
        )}
      </Stack.Navigator>
    </>
  );
};

export default AuthStack;
