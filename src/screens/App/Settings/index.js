import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useDispatch } from 'react-redux';
import Container from '../../../components/Container';
import { hp } from '../../../utils/responsive';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { logOutApi } from '../../../redux/reducers/user/User.actions';

const Settings = () => {
  const dispatch = useDispatch();

  return (
    <Container>
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
