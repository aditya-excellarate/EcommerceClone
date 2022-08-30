import { StyleSheet, TextInput, View, Text } from 'react-native';
import React from 'react';
import { fontSize, hp, wp } from '../utils/responsive';
const DefaultInput = ({ value, onChangeText, placeholder, label, error, ...props }) => {
  return (
    <View style={{ marginVertical: hp(2) }}>
      <Text style={{ fontSize: fontSize(18) }}>{label || placeholder}</Text>
      <TextInput
        onChangeText={onChangeText}
        value={value}
        style={{
          paddingVertical: wp(2),
          paddingHorizontal: hp(2),
          borderColor: '#eee',
          borderWidth: 2,
          borderRadius: 5,
          marginVertical: hp(1),
          fontSize: fontSize(20),
        }}
        {...props}
      />
      {!!error && <Text style={{ color: 'rgb(255,51,51)' }}>{error}</Text>}
    </View>
  );
};

export default DefaultInput;

const styles = StyleSheet.create({});
