import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: '',
  user: {},
  intro: false,
  userType: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions

  reducers: {
    login: (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
    updateUser: (state, action) => {
      return (state = { ...state, ...action.payload });
    },
    logOut: (state) => {
      (state.token = ''), (state.user = {});
    },
  },
});
export default userSlice;
