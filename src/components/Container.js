import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import { wp } from '../utils/responsive';

const Container = ({ subContainerStyle, children }) => {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, padding: wp(5), backgroundColor: '#FFF' }}>
      <View style={{ flexGrow: 1, ...subContainerStyle }}>{children}</View>
    </ScrollView>
  );
};

export default Container;
