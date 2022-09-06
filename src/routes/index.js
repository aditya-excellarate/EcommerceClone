import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthStack from './AuthStack';
import { useDispatch, useSelector } from 'react-redux';
import { Dimensions } from 'react-native';
import DeviceInfoSlice from '../redux/reducers/DeviceInfo/DeviceInfo.reducer';
import AppStack from './AppStack/AppStack';
import VendorStack from './VendorStack';

const Routes = () => {
  const Stack = createNativeStackNavigator();
  const user = useSelector((state) => state?.user);
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
        {user?.token ? (
          <Stack.Screen
            name="App"
            component={user?.userType ? AppStack : VendorStack}
            options={{ headerShown: false }}
          />
        ) : (
          <Stack.Screen name="Auth" component={AuthStack} options={{ headerShown: false }} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
