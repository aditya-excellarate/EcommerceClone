import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import Container from '../../components/Container';
import { hp, wp } from '../../utils/responsive';
import { Colors } from '../../assets/colors';
import DefaultButton from '../../components/DefaultButton';
import { useDispatch } from 'react-redux';
import { updateUser } from '../../redux/reducers/user/User.actions';

const ChooseUser = ({ navigation }) => {
  const dispatch = useDispatch();
  const [selectedUser, setSelectedUser] = useState(0);
  const onSelectUserType = () => {
    dispatch(updateUser({ userType: selectedUser }));
  };

  return (
    <Container subContainerStyle={{ justifyContent: 'center' }}>
      <View style={styles.optionContainer}>
        <TouchableOpacity
          onPress={() => setSelectedUser(0)}
          style={[styles.userOption, !selectedUser && { opacity: 1 }]}
        >
          <Text style={{ color: '#FFF' }}>Customer</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setSelectedUser(1)}
          style={[styles.userOption, selectedUser && { opacity: 1 }]}
        >
          <Text style={{ color: '#FFF' }}>Vendor</Text>
        </TouchableOpacity>
      </View>
      <DefaultButton
        label="Select User"
        containerStyle={{ marginTop: 'auto' }}
        onPress={onSelectUserType}
      />
    </Container>
  );
};

export default ChooseUser;

const styles = StyleSheet.create({
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
  },
  userOption: {
    width: wp(40),
    height: wp(40),
    backgroundColor: Colors.Orange,
    borderRadius: wp(20),
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.7,
  },
});
