import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Container from '../../../components/Container';
import { hp, wp } from '../../../utils/responsive';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { logOutApi } from '../../../redux/reducers/user/User.actions';

const Settings = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state?.user?.user);
  return (
    <Container>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Icon name="account-circle" size={wp(20)} />
        <Text>{user?.name}</Text>
        <Text>{user?.email}</Text>
      </View>
      <TouchableOpacity
        onPress={() => dispatch(logOutApi())}
        style={{
          borderBottomWidth: 2,
          borderColor: '#EEE',
          paddingVertical: hp(2),
          flexDirection: 'row',
        }}
      >
        <Icon name="arrow-right" size={20} />
        <Text>Logout</Text>
      </TouchableOpacity>
    </Container>
  );
};

export default Settings;

const styles = StyleSheet.create({});
