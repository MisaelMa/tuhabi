import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { HYDRATE } from 'next-redux-wrapper';
import { Session } from '../../common/types/app/types';
import { User } from '../../common/types';

export let initialState = {
  token: '',
  isAuth: false,
  user: {
    _id: '0',
    name: 'a',
    role: '',
    email: '',
    picture: '',
  },
};
export const session = createSlice({
  name: 'session',
  initialState,

  reducers: {
    updatePicture: (state, action: PayloadAction<{ picture: string }>) => {
      state.user.picture = action.payload.picture;
    },
    login: (state, action: PayloadAction<{ token: string; user: User }>) => {
      console.log('aqui', action);
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.isAuth = true;
    },
    logout: state => {
      state.token = '';
      state.isAuth = false;
      state.user = {
        _id: '0',
        name: '',
        role: '',
        email: '',
        picture: '',
      };
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      console.log('HYDRATE', state, action.payload);
      return {
        ...state,
        ...action.payload.subject,
      };
    },
  },
});
