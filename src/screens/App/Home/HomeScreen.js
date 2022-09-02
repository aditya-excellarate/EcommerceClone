import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Container from '../../../components/Container';
import { ImageConstant } from '../../../assets/images';
import { hp, wp } from '../../../utils/responsive';
import { AppStrings } from '../../../assets/StringConstant';
const fastFoods = [
  {
    id: 0,
    title: 'Healthy',
    image: ImageConstant.BURGER,
  },
  {
    id: 1,
    title: 'Pizza',
    image: ImageConstant.BURGER,
  },
  {
    id: 3,
    title: 'Burger',
    image: ImageConstant.BURGER,
  },
  {
    id: 4,
    title: 'Rolls',
    image: ImageConstant.BURGER,
  },
  {
    id: 5,
    title: 'Fries',
    image: ImageConstant.BURGER,
  },
  {
    id: 6,
    title: 'Chicken',
    image: ImageConstant.BURGER,
  },
  {
    id: 7,
    title: 'Home Style',
    image: ImageConstant.BURGER,
  },
  {
    id: 8,
    title: 'Chaat',
    image: ImageConstant.BURGER,
  },
];

const vendorList = [
  {
    id: 0,
    title: 'Rolls express',
    image: ImageConstant.BURGER,
    address: 'address A-1 XYZ',
  },
  {
    id: 1,
    title: 'Crazy Coffee',
    image: ImageConstant.PIZZA,
    address: 'address A-1 XYZ',
  },
  {
    id: 2,
    title: 'Gulab ji chaai',
    image: ImageConstant.BURGER,
    address: 'address A-1 XYZ',
  },
];
const HomeScreen = ({ navigation }) => {
  const RenderFastFoodCategories = ({ item }) => {
    return (
      <View key={item?.id} style={{ padding: wp(1), alignItems: 'center' }}>
        <Image
          source={item?.image}
          style={{ width: wp(20), height: wp(20), resizeMode: 'contain' }}
        />
        <Text>{item?.title}</Text>
      </View>
    );
  };

  return (
    <Container>
      <Pressable>
        <View>
          <Text style={{ fontWeight: '900', color: '#000' }}>Popular Categories</Text>
          <View style={styles.categoryContainer}>
            {fastFoods?.map((item) => (
              <RenderFastFoodCategories key={item?.id} item={item} />
            ))}
          </View>
        </View>
        <Text style={{}}>Restaurants to explore</Text>
        <View>
          {vendorList?.map((item) => (
            <TouchableOpacity
              onPress={() => navigation.navigate(AppStrings.MENU)}
              style={{ flexDirection: 'row' }}
            >
              <Image source={item?.image} style={styles.vendorImage} />
              <View>
                <Text style={styles.vendorTitle}>{item?.title}</Text>
                <Text style={styles.vendorAddress}>{item?.address}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </Pressable>
    </Container>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  categoryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  heading: {
    fontWeight: 'bold',
    color: '#000',
    marginVertical: hp(2),
  },
  vendorImage: {
    width: wp(30),
    height: wp(30),
    resizeMode: 'contain',
  },
  vendorTitle: {
    fontWeight: 'bold',
    color: '#000',
    marginLeft: wp(2),
    marginTop: hp(5),
  },
  vendorAddress: {
    color: 'grey',
    marginLeft: wp(2),
  },
});
