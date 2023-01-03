import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { AppStrings } from '../../assets/StringConstant';
import EditItem from '../../screens/App/VendorScreen/EditItem';
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
      <Stack.Screen
        name={AppStrings.EDITITEM}
        component={EditItem}
        // options={{
        //   headerShown: false,
        // }}
      />
    </Stack.Navigator>
  );
};

export default VendorStack;
