import { useEffect, useState } from 'react';
import { Dimensions, PixelRatio } from 'react-native';
import { store } from '../redux';
const window = Dimensions.get('window');

export const wp = (percent) => {
  const width = store?.getState()?.deviceInfo?.deviceDimension?.width || window.width;
  return PixelRatio.roundToNearestPixel((width * percent) / 100);
};
export const hp = (percent) => {
  const height = store?.getState()?.deviceInfo?.deviceDimension?.height || window.height;
  return PixelRatio.roundToNearestPixel((height * percent) / 100);
};

export const fontSize = (size) => {
  const scale = store?.getState()?.deviceInfo?.deviceDimension?.fontScale || 1;
  return size * scale;
};

export const useScreenOrientation = () => {
  const [orientation, setOrientation] = useState('potrait');

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({ window, screen }) => {
      let orientation = window.width > window.height ? 'landscape' : 'potrait';
      setOrientation(orientation);
    });
    return () => subscription?.remove();
  }, []);
  return orientation;
};
