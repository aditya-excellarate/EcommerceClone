import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthStack from './AuthStack';
import AppStack from './AppStack';
import { useDispatch, useSelector } from 'react-redux';
import { Dimensions } from 'react-native';
import DeviceInfoSlice from '../redux/reducers/DeviceInfo/DeviceInfo.reducer';

const Routes = () => {
  const Stack = createNativeStackNavigator();
  const userToken = useSelector((state) => state?.user?.token);
  const dispatch = useDispatch();

  // fetch screen rotation
  useEffect(() => {
    const { updateDeviceInfo } = DeviceInfoSlice.actions;
    dispatch(updateDeviceInfo({ deviceDimension: Dimensions.get('window') }));
    const subscription = Dimensions.addEventListener('change', ({ window }) => {
      let orientation = window.width > window.height ? 'landscape' : 'potrait';
      dispatch(updateDeviceInfo({ deviceDimension: window, orientation }));
    });
    return () => subscription?.remove();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Auth">
        {userToken ? (
          <Stack.Screen name="App" component={AppStack} options={{ headerShown: false }} />
        ) : (
          <Stack.Screen name="Auth" component={AuthStack} options={{ headerShown: false }} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
