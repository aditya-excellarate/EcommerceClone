import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Container from '../../../components/Container';
import { AppStrings } from '../../../assets/StringConstant';
import { hp, wp } from '../../../utils/responsive';

const Menu = ({ navigation, route }) => {
  const vendor = route?.params;
  const RenderMenuList = ({ item }) => {
    return (
      <TouchableOpacity
        style={{ paddingVertical: hp(1.5), flexDirection: 'row' }}
        onPress={() => navigation.navigate(AppStrings.PRODUCTLIST)}
      >
        <Image
          source={{ uri: `${AppStrings.baseUrl}${item?.image}` }}
          style={{ width: wp(20), height: wp(20), borderRadius: 10 }}
        />
        <View style={{ paddingHorizontal: wp(2), paddingVertical: wp(1), flex: 1 }}>
          <Text style={{ fontWeight: '800', color: '#000' }}>{item?.title} </Text>
          <Text style={{ color: '#000' }}>{item?.description} </Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <Container>
      <View>
        {vendor?.menu?.map((item) => (
          <RenderMenuList item={item} key={item?.id} />
        ))}
      </View>
    </Container>
  );
};

export default Menu;

const styles = StyleSheet.create({});
