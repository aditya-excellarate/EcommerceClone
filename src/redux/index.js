import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userSlice from './reducers/user/User.reducer';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import DeviceInfoSlice from './reducers/DeviceInfo/DeviceInfo.reducer';

const reducer = combineReducers({
  user: userSlice.reducer,
  deviceInfo: DeviceInfoSlice.reducer,
  // here we will be adding reducers
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['user'],
};
const persistedReducer = persistReducer(persistConfig, reducer);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});
export const persistor = persistStore(store);
