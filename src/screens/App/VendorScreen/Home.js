import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import Container from '../../../components/Container';
import { AppStrings } from '../../../assets/StringConstant';
import { hp } from '../../../utils/responsive';
import { useSelector } from 'react-redux';

const VendorHome = ({ navigation }) => {
  const MenuList = useSelector((state) => state?.user?.menuList);
  const [currentMenu, setCurrentMenu] = useState([]);

  const fetchTime = () => {
    const date = new Date();
    const now = date.getHours() * 60 + date.getMinutes();
    const breakFaststart = 7 * 60 + 5;
    const breakFastend = 11 * 60 + 57;
    const lunchstart = 12 * 60 + 5;
    const lunchend = 17 * 60 + 57;
    const dinnerstart = 19 * 60 + 5;
    const dinnerend = 21 * 60 + 57;
    if (breakFaststart <= now && now <= breakFastend) return 'breakfast';
    if (lunchstart <= now && now <= lunchend) return 'lunch';
    if (dinnerstart <= now && now <= dinnerend) return 'dinner';
  };

  const type = fetchTime();

  const filterMenu = () => {
    const duplicateMenu = MenuList?.filter((item) => item?.[type]);
    setCurrentMenu(duplicateMenu);
  };
  const RenderMenuList = ({ item }) => {
    return (
      <TouchableOpacity style={{ paddingVertical: hp(1.5) }}>
        <Text>{item?.title} </Text>
      </TouchableOpacity>
    );
  };

  useEffect(() => {
    filterMenu();
  }, [MenuList]);

  return (
    <Container>
      <View>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>{type} Menu</Text>
          <Pressable onPress={() => navigation.navigate(AppStrings.EDITMENU)}>
            <Text>Edit</Text>
          </Pressable>
        </View>
        {currentMenu?.map((item) => (
          <RenderMenuList item={item} key={item?.id} />
        ))}
      </View>
      {!!!currentMenu?.length && (
        <View
          style={{
            flexGrow: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text>{type ? `no items found ` : 'Restaurant currently closed'}</Text>
        </View>
      )}
    </Container>
  );
};

export default VendorHome;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  header: {
    fontWeight: 'bold',
    color: '#000',
    textTransform: 'capitalize',
  },
});
