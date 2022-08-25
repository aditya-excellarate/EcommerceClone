import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { fontSize, hp } from '../utils/responsive';

const DefaultButton = ({ onPress, label }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: 'orange',
        paddingVertical: hp(3),
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: hp(2),
      }}
    >
      <Text style={{ fontSize: fontSize(22) }}>{label}</Text>
    </TouchableOpacity>
  );
};

export default DefaultButton;
