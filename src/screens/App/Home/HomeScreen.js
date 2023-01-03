import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Container from '../../../components/Container';
import { hp, wp } from '../../../utils/responsive';
import { AppStrings } from '../../../assets/StringConstant';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchMenuItems, fetchVendors } from '../../../redux/reducers/user/User.actions';

const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const vendorList = useSelector((state) => state?.user?.vendorList);
  const fastFoods = useSelector((state) => state.user.menuList);
  useEffect(() => {
    dispatch(fetchMenuItems());
    dispatch(fetchVendors());
  }, []);

  const RenderFastFoodCategories = ({ item }) => {
    return (
      <View key={item?.id} style={{ padding: wp(1), alignItems: 'center' }}>
        <Image
          source={{ uri: `${AppStrings.baseUrl}${item?.image}` }}
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
              onPress={() => navigation.navigate(AppStrings.MENU, item)}
              style={{ flexDirection: 'row' }}
            >
              <Image
                source={{ uri: `${AppStrings.baseUrl}${item?.image}` }}
                style={styles.vendorImage}
              />
              <View>
                <Text style={styles.vendorTitle}>{item?.name}</Text>
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
