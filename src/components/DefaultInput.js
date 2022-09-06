import { StyleSheet, TextInput, View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { fontSize, hp, wp } from '../utils/responsive';
const DefaultInput = ({
  buttonLabel,
  onPress,
  value,
  onChangeText,
  placeholder,
  label,
  error,
  disabled,
  ...props
}) => {
  return (
    <View style={{ marginVertical: hp(2) }}>
      <Text style={{ fontSize: fontSize(18) }}>{label || placeholder}</Text>
      <View style={styles.inputContainer}>
        <TextInput onChangeText={onChangeText} value={value} style={styles.inputBox} {...props} />
        {!!onPress && (
          <TouchableOpacity
            onPress={onPress && !disabled ? onPress : null}
            style={[styles.buttonContainer, disabled && { opacity: 0.4 }]}
          >
            <Text style={{ color: '#FFF' }}>{buttonLabel}</Text>
          </TouchableOpacity>
        )}
      </View>

      {!!error && <Text style={{ color: 'rgb(255,51,51)' }}>{error}</Text>}
    </View>
  );
};

export default DefaultInput;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    borderColor: '#eee',
    borderWidth: 2,
    borderRadius: 5,
    marginVertical: hp(1),
    overflow: 'hidden',
  },
  inputBox: {
    flex: 1,
    fontSize: fontSize(20),
  },
  buttonContainer: {
    paddingHorizontal: wp(8),
    backgroundColor: 'grey',
    justifyContent: 'center',
  },
});
