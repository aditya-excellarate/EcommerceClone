import { Image, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';
import React from 'react';

import AppIntroSlider from 'react-native-app-intro-slider';
import { slides } from '../../utils/dummy';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useDispatch } from 'react-redux';
import { updateUser } from '../../redux/reducers/user/User.actions';

const AppIntro = () => {
  const dispatch = useDispatch();
  const renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
        <Text style={styles.title}>{item.title}</Text>
        <Image source={item.image} style={{ width: '100%', height: '100%', resizeMode: 'cover' }} />
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };
  const renderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Icon name="arrow-right" color="rgba(255, 255, 255, .9)" size={24} />
      </View>
    );
  };
  const onPressDoneButton = () => {
    dispatch(updateUser({ intro: true }));
  };
  const renderDoneButton = () => {
    return (
      <TouchableOpacity style={styles.buttonCircle} onPress={onPressDoneButton}>
        <Icon name="check-circle" color="rgba(255, 255, 255, .9)" size={24} />
      </TouchableOpacity>
    );
  };
  return (
    <AppIntroSlider
      data={slides}
      renderDoneButton={renderDoneButton}
      renderNextButton={renderNextButton}
      renderItem={renderItem}
    />
  );
};

export default AppIntro;

const styles = StyleSheet.create({
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(0, 0, 0, .2)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
