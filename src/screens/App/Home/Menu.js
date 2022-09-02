import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Container from '../../../components/Container';
import { AppStrings } from '../../../assets/StringConstant';
import { hp } from '../../../utils/responsive';
const MenuList = [
  {
    id: 0,
    title: 'Pizza',
  },
  {
    id: 1,
    title: 'Burger',
  },
  {
    id: 2,
    title: 'Sandwich',
  },
];
const Menu = ({ navigation }) => {
  const RenderMenuList = ({ item }) => {
    return (
      <TouchableOpacity
        style={{ paddingVertical: hp(1.5) }}
        onPress={() => navigation.navigate(AppStrings.PRODUCTLIST)}
      >
        <Text>{item?.title} </Text>
      </TouchableOpacity>
    );
  };
  return (
    <Container>
      <View>
        {MenuList?.map((item) => (
          <RenderMenuList item={item} key={item?.id} />
        ))}
      </View>
    </Container>
  );
};

export default Menu;

const styles = StyleSheet.create({});
