import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../constants';
import { moviesProcess } from './movies/movies';
import { appProcess } from './app/app';
import { userProcess } from './user/user';
import { filmProcess } from './film/film';

export const rootReducer = combineReducers({
  [NameSpace.Movies]: moviesProcess.reducer,
  [NameSpace.App]: appProcess.reducer,
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.Film]: filmProcess.reducer,
});
