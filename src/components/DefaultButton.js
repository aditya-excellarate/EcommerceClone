import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { fontSize, hp, wp } from '../utils/responsive';
import { Colors, theme } from '../assets/colors';

const DefaultButton = ({ onPress, label, isValid = true, containerStyle }) => {
  return (
    <TouchableOpacity
      onPress={isValid ? onPress : null}
      style={{
        backgroundColor: theme.primaryBtn,
        opacity: isValid ? 1 : 0.4,
        paddingVertical: hp(1.5),
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: hp(2),
        width: wp(50),
        marginLeft: 'auto',
        marginRight: 'auto',
        ...containerStyle,
      }}
    >
      <Text style={{ fontSize: fontSize(18), color: '#FFF', textTransform: 'uppercase' }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default DefaultButton;
