import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/MaterialIcons';
import Settings from '../screens/App/Settings';
import HomeScreen from '../screens/App/Home/HomeScreen';

const HomeStack = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'account-circle' : 'account-circle';
          } else if (route.name === 'Order') {
            iconName = focused ? 'shopping-bag' : 'shopping-bag';
          } else if (route.name === 'Setting') {
            iconName = focused ? 'settings' : 'settings';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} screenOptions={{ headerShown: false }} />
      <Tab.Screen name="Profile" component={Settings} />
      <Tab.Screen name="Order" component={Settings} />
      <Tab.Screen name="Setting" component={Settings} />
    </Tab.Navigator>
  );
};

export default HomeStack;
