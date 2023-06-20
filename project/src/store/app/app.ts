import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../constants';

type InitialState = {
  genre: string;
};

const initialState: InitialState = {
  genre: 'All genres',
};

export const appProcess = createSlice({
  name: NameSpace.App,
  initialState,
  reducers: {
    changeGenre: (state, action: PayloadAction<string>) => {
      state.genre = action.payload;
    },
  }
});

export const { changeGenre } = appProcess.actions;
