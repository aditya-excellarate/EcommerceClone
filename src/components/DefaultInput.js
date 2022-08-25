import { StyleSheet, TextInput, View, Text } from 'react-native';
import React from 'react';
import { fontSize, hp, wp } from '../utils/responsive';
const DefaultInput = ({ value, onChangeText, placeholder, label, ...props }) => {
  return (
    <View style={{ marginVertical: hp(2) }}>
      <Text style={{ fontSize: fontSize(20) }}>{label || placeholder}</Text>
      <TextInput
        onChangeText={onChangeText}
        value={value}
        style={{
          paddingVertical: wp(3),
          paddingHorizontal: hp(2),
          borderColor: '#eee',
          borderWidth: 2,
          borderRadius: 5,
          marginTop: hp(2),
          fontSize: fontSize('22'),
        }}
        {...props}
      />
    </View>
  );
};

export default DefaultInput;

const styles = StyleSheet.create({});
