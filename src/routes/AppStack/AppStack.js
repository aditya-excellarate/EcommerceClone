import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { AppStrings } from '../../assets/StringConstant';
import Menu from '../../screens/App/Home/Menu';
import ProductList from '../../screens/App/Home/ProductList';
import { wp } from '../../utils/responsive';
import HomeStack from '../HomeStack';

const AppStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName={AppStrings.HOME}>
      <Stack.Screen
        name={AppStrings.HOME}
        component={HomeStack}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name={AppStrings.MENU} component={Menu} />
      <Stack.Screen
        name={AppStrings.PRODUCTLIST}
        component={ProductList}
        options={{
          headerRight: () => (
            <TouchableOpacity onPress={() => alert('hi')}>
              <Icon name="cart" size={wp(5)} color="#000" />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default AppStack;
