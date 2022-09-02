import { Image, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import Container from '../../../components/Container';
import { ImageConstant } from '../../../assets/images';
import { wp } from '../../../utils/responsive';
import CartItem from '../../../components/cartOperation';
import SwipeButton from 'rn-swipe-button';
import Icon from 'react-native-vector-icons/MaterialIcons';
const dummy = [
  {
    id: 0,
    title: 'Crispy Veg Burger',
    description:
      'Out best-selling burger with Crispy veg patty, fresh onion and oir signature sauce',
    count: 1,
    image: ImageConstant.BURGER,
    amount: 60,
  },
];

const ProductList = () => {
  const [productList, setProductList] = useState(dummy);

  const RenderProductList = ({ item, index }) => {
    const { count } = item;
    return (
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.productDescriptionContainer}>
          <Text style={styles.productTitle}>{item?.title}</Text>
          <Text>{`Rs ${item?.amount}`}</Text>
          <Text>{item?.description}</Text>
        </View>
        <View style={styles.productImageContainer}>
          <Image source={item?.image} style={styles.productImage} />
          <CartItem
            count={count}
            onPressIncrement={() => manipulateProductList({ index, value: count + 1 })}
            onPressDecrement={() => manipulateProductList({ index, value: count - 1 })}
          />
        </View>
      </View>
    );
  };

  const manipulateProductList = ({ index, value }) => {
    const dummyList = [...productList];
    dummyList[index].count = value;
    setProductList(dummyList);
  };

  return (
    <Container>
      {productList?.map((item, index) => (
        <RenderProductList item={item} index={index} key={item.id} />
      ))}
      <SwipeButton
        onSwipeSuccess={() => alert('Order placed')}
        thumbIconBackgroundColor="#FFFFFF"
        title="Slide to Place order"
        railFillBackgroundColor="rgba(0,0,0,0.2)"
        containerStyles={{ marginTop: 'auto' }}
        shouldResetAfterSuccess
        thumbIconComponent={() => <Icon color="#000" name="arrow-forward-ios" size={wp(8)} />}
        railBackgroundColor="#31a57c"
        thumbIconStyles={{ borderRadius: 50, marginLeft: wp(5) }}
      />
    </Container>
  );
};

export default ProductList;

const styles = StyleSheet.create({
  productImage: {
    width: wp(30),
    height: wp(30),
    resizeMode: 'cover',
  },
  productImageContainer: {
    width: wp(30),
    alignItems: 'center',
  },
  productDescriptionContainer: {
    flex: 1,
    justifyContent: 'space-around',
  },
  productTitle: {
    color: '#000',
    fontWeight: 'bold',
  },
});
