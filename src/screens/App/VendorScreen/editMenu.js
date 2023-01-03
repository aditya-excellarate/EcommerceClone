import { Keyboard, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import Container from '../../../components/Container';
import CheckBox from '@react-native-community/checkbox';
import { hp } from '../../../utils/responsive';
import { useDispatch, useSelector } from 'react-redux';
import { addMenu } from '../../../redux/reducers/user/User.actions';
import DefaultInput from '../../../components/DefaultInput';
import { AppStrings } from '../../../assets/StringConstant';

const EditMenu = ({ navigation }) => {
  const menu = useSelector((state) => state?.user?.menuList);
  const user = useSelector((state) => state?.user);
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
    dispatch(
      addMenu({
        _id: user?.user?._id,
        menu: [{ title: title, lunch: false, dinner: false, breakfast: false }],
      })
    );
    setTitle('');
  };

  const onToggleAvailabilityPress = (id, type) => {
    const duplicateArray = menu?.map((item) => {
      if (item._id === id) {
        return { ...item, [type]: !item[type] };
      }
      return item;
    });
    dispatch(addMenu({ _id: user?.user?._id, menu: duplicateArray }));
  };

  const RenderMenuList = ({ item, index }) => {
    return (
      <TouchableOpacity
        style={{
          marginBottom: hp(1),
          paddingVertical: hp(1),
          borderColor: 'grey',
          borderBottomWidth: 1,
        }}
        onPress={() => navigation.navigate(AppStrings.EDITITEM, { ...item })}
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
              onValueChange={(newValue) => onToggleAvailabilityPress(item?._id, 'breakfast')}
            />
          </View>

          <View>
            <Text>Lunch</Text>
            <CheckBox
              disabled={false}
              value={item?.lunch}
              onValueChange={() => onToggleAvailabilityPress(item?._id, 'lunch')}
            />
          </View>
          <View>
            <Text>Dinner</Text>
            <CheckBox
              disabled={false}
              value={item?.dinner}
              onValueChange={() => onToggleAvailabilityPress(item?._id, 'dinner')}
            />
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  useEffect(() => {}, [menu]);

  return (
    <Container>
      <View>
        <TouchableOpacity
          style={{ alignItems: 'flex-end' }}
          onPress={() => navigation.navigate(AppStrings.EDITITEM)}
        >
          <Text>Add Item</Text>
        </TouchableOpacity>
        {menu?.map((item, index) => (
          <RenderMenuList item={item} index={index} key={item?._id} />
        ))}
      </View>
    </Container>
  );
};

export default EditMenu;

const styles = StyleSheet.create({});
