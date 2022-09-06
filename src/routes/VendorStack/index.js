import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { AppStrings } from '../../assets/StringConstant';
import EditMenu from '../../screens/App/VendorScreen/editMenu';
import VendorHome from '../../screens/App/VendorScreen/Home';

const VendorStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName={AppStrings.HOME}>
      <Stack.Screen
        name={AppStrings.HOME}
        component={VendorHome}
        // options={{
        //   headerShown: false,
        // }}
      />
      <Stack.Screen
        name={AppStrings.EDITMENU}
        component={EditMenu}
        // options={{
        //   headerShown: false,
        // }}
      />
    </Stack.Navigator>
  );
};

export default VendorStack;
