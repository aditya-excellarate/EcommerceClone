import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  deviceDimension: { width: 0, height: 0 },
  orientation: 'potrait',
};

const DeviceInfoSlice = createSlice({
  name: 'DeviceInfo',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    updateDeviceInfo: (state, action) => {
      return (state = { ...state, ...action.payload });
    },
  },
});
export default DeviceInfoSlice;
