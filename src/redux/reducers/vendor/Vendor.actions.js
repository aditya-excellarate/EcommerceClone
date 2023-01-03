import Axios from '../../../apis/interceptor';
import { showToast } from '../../../utils/toast';
import userSlice from './Vendor.reducer';

const { login, logOut, updateUser: updateUserAction } = userSlice.actions;

export const loginApi = (email, password, userType) => async (dispatch) => {
  Axios()
    .post('login', { email, password, userType })
    .then((data) => {
      showToast(1, 'Yuppii!!', 'Logged in successfully');
      dispatch(login({ token: data?.data?.token, user: { ...data?.data } }));
    })
    .catch((err) => showToast(0, 'Oops!!', err?.data?.message));
};

export const registerApi = (name, email, password) => async (dispatch) => {
  Axios()
    .post('register', { name, email, password, userType: 1 })
    .then((data) => {
      showToast(1, 'Yuppii!!', 'Register successfully');
      dispatch(login({ token: data?.data?.token, user: { ...data?.data } }));
    })
    .catch((err) => {
      console.log('@@@@@ signup error', err);
      showToast(0, 'Oops!!', err?.data?.message);
    });
};

export const updateUser = (userData) => (dispatch) => {
  dispatch(updateUserAction(userData));
};

export const addEditMenuItemApi = (itemData) => (dispatch) => {
  return Axios({ header: { 'Content-Type': 'multipart/form-data' } })
    .post('vendor/editMenuItem', itemData)
    .then((data) => {
      dispatch(updateUser({ menuList: data }));
      return Promise.resolve(data);
    })
    .catch((err) => console.log('err', err));
};

export const logOutApi = () => async (dispatch) => {
  dispatch(logOut());
};
