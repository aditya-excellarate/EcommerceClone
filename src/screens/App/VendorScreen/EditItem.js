import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import Container from '../../../components/Container';
import DefaultInput from '../../../components/DefaultInput';
import CheckBox from '@react-native-community/checkbox';
import { launchImageLibrary } from 'react-native-image-picker';
import DefaultButton from '../../../components/DefaultButton';
import { useDispatch, useSelector } from 'react-redux';
import { wp } from '../../../utils/responsive';
import { Colors } from '../../../assets/colors';
import { AppStrings } from '../../../assets/StringConstant';
import { addEditMenuItemApi } from '../../../redux/reducers/vendor/Vendor.actions';

const EditItem = ({ navigation, route }) => {
  const itemData = route?.params;
  const [title, setTitle] = useState(itemData?.title || '');
  const [lunch, setLunch] = useState(itemData?.lunch || false);
  const [breakfast, setBreakfast] = useState(itemData?.breakfast || false);
  const [dinner, setDinner] = useState(itemData?.dinner || false);
  const [image, setImage] = useState({});
  const user = useSelector((state) => state?.user);
  const dispatch = useDispatch();
  const imageLink = itemData?.image ? `${AppStrings.baseUrl}${itemData?.image}` : '';
  const [imageURL, setImageURL] = useState(imageLink);
  const selectImage = async () => {
    const options = {
      mediaType: 'photo',
    };

    launchImageLibrary(options)
      .then((data) => {
        setImageURL(data.assets[0].uri);
        setImage(data.assets[0]);
      })
      .catch((err) => console.log('@@@@ err', err));
  };

  const submitItem = () => {
    const formData = new FormData();
    const menuItem = {
      title,
      breakfast,
      lunch,
      dinner,
    };
    if (itemData?._id) {
      menuItem._id = itemData?._id;
    }
    const newImage = {
      name: image?.fileName,
      uri: image?.uri,
      type: image?.type,
    };

    formData.append('_id', user?.user?._id);
    formData.append('menuItem', JSON.stringify(menuItem));
    formData.append('image', image?.fileName ? newImage : '');
    dispatch(addEditMenuItemApi(formData))
      .then((data) => {
        console.log('data', data);
        navigation.goBack();
      })
      .catch((err) => console.log('err', err));
  };
  return (
    <Container>
      <TouchableOpacity
        style={{
          width: wp(90),
          height: imageURL ? wp(80) : wp(30),
          borderWidth: 2,
          borderColor: Colors.disableOrange,
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={selectImage}
      >
        {imageURL ? (
          <Image
            source={{ uri: imageURL }}
            style={{ borderRadius: 10, width: '100%', height: '100%' }}
          />
        ) : (
          <Text>Upload image</Text>
        )}
      </TouchableOpacity>
      <DefaultInput placeholder="Add Title" value={title} onChangeText={setTitle} />
      <View style={styles.itemsContainer}>
        <CheckBox
          disabled={false}
          value={breakfast}
          onValueChange={() => setBreakfast(!breakfast)}
        />
        <Text>BreakFast</Text>
      </View>
      <View style={styles.itemsContainer}>
        <CheckBox disabled={false} value={lunch} onValueChange={() => setLunch(!lunch)} />
        <Text>Lunch</Text>
      </View>
      <View style={styles.itemsContainer}>
        <CheckBox disabled={false} value={dinner} onValueChange={() => setDinner(!dinner)} />
        <Text>Dinner</Text>
      </View>
      <DefaultButton label="Submit" onPress={submitItem} />
    </Container>
  );
};

export default EditItem;

const styles = StyleSheet.create({
  itemsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
