import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { wp } from '../utils/responsive';

const CartItem = ({ count, onPressIncrement, onPressDecrement }) => {
  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity
        style={{
          ...styles.cartOperation,
          borderRightWidth: 0,
          borderTopLeftRadius: 3,
          borderBottomLeftRadius: 3,
        }}
        onPress={count > 0 ? onPressDecrement : null}
      >
        <Text>-</Text>
      </TouchableOpacity>
      <View style={styles.countContainer}>
        <Text>{count}</Text>
      </View>
      <TouchableOpacity
        style={{
          ...styles.cartOperation,
          borderLeftWidth: 0,
          borderTopEndRadius: 3,
          borderBottomRightRadius: 3,
        }}
        onPress={onPressIncrement}
      >
        <Text>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  countContainer: { borderWidth: 1, borderColor: 'gray', paddingHorizontal: wp(1) },
  cartOperation: {
    borderWidth: 1,
    borderColor: 'gray',
    paddingHorizontal: wp(2),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
