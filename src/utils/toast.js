import Toast from 'react-native-toast-message';
import { Button } from 'react-native';
import React from 'react';

export function showToast(status, title, description) {
  return Toast.show({
    type: status ? 'success' : 'error',
    text1: title,
    text2: description,
  });
}
