import { Keyboard, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import Container from '../../../components/Container';
import CheckBox from '@react-native-community/checkbox';
import { hp } from '../../../utils/responsive';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../../../redux/reducers/user/User.actions';
import DefaultInput from '../../../components/DefaultInput';

const EditMenu = () => {
  const menu = useSelector((state) => state?.user?.menuList);
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const onPressAddItem = () => {
    const duplicateArray = [...menu];
    duplicateArray.push({
      id: duplicateArray.length,
      title: title,
      lunch: false,
      dinner: false,
      breakfast: false,
    });
    dispatch(updateUser({ menuList: duplicateArray }));
    setTitle('');
  };

  const onToggleAvailabilityPress = (id, type) => {
    const duplicateArray = menu?.map((item) => {
      if (item.id === id) {
        return { ...item, [type]: !item[type] };
      }
      return item;
    });
    dispatch(updateUser({ menuList: duplicateArray }));
  };

  const RenderMenuList = ({ item, index }) => {
    return (
      <View
        style={{
          marginBottom: hp(1),
          paddingVertical: hp(1),
          borderColor: 'grey',
          borderBottomWidth: 1,
        }}
      >
        <Text style={{ color: '#000', fontWeight: 'bold', marginBottom: hp(0.5) }}>
          {item?.title}
        </Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View>
            <Text>BreakFast</Text>
            <CheckBox
              disabled={false}
              value={item?.breakfast}
              onValueChange={(newValue) => onToggleAvailabilityPress(item?.id, 'breakfast')}
            />
          </View>

          <View>
            <Text>Lunch</Text>
            <CheckBox
              disabled={false}
              value={item?.lunch}
              onValueChange={(newValue) => onToggleAvailabilityPress(item?.id, 'lunch')}
            />
          </View>
          <View>
            <Text>Dinner</Text>
            <CheckBox
              disabled={false}
              value={item?.dinner}
              onValueChange={() => onToggleAvailabilityPress(item?.id, 'dinner')}
            />
          </View>
        </View>
      </View>
    );
  };
  useEffect(() => {}, [menu]);

  return (
    <Container>
      <View>
        {menu?.map((item, index) => (
          <RenderMenuList item={item} index={index} key={item?.id} />
        ))}
        <View>
          <DefaultInput
            onChangeText={(text) => setTitle(text)}
            placeholder="Other item"
            value={title}
            onPress={() => onPressAddItem()}
            buttonLabel="ADD"
            disabled={!!!title}
            onSubmitEditing={() => {
              Keyboard.dismiss();
              onPressAddItem();
            }}
          />
        </View>
      </View>
    </Container>
  );
};

export default EditMenu;

const styles = StyleSheet.create({});
