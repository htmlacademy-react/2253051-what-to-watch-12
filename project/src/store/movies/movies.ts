import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, Status } from '../../constants';
import { fetchFavoritesMoviesAction, fetchMoviesAction, fetchSimilarMoviesAction } from '../api-actions';
import { MovieProps } from '../../types/movie/movie';

type InitialState = {
  movies: MovieProps[];
  status: Status;
  statusFavorites: Status;
  favoritesMovies: MovieProps[];
  statusSimilarMovies: Status;
  similarMovies: MovieProps[];
};

const initialState: InitialState = {
  movies: [],
  status: Status.Idle,
  statusFavorites: Status.Idle,
  favoritesMovies: [],
  statusSimilarMovies: Status.Idle,
  similarMovies: [],
};

export const moviesProcess = createSlice({
  name: NameSpace.Movies,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchMoviesAction.pending, (state, action) => {
        state.status = Status.Loading;
      })
      .addCase(fetchMoviesAction.fulfilled, (state, action) => {
        state.status = Status.Success;
        state.movies = action.payload;
      })
      .addCase(fetchMoviesAction.rejected, (state, action) => {
        state.status = Status.Failed;
      })
      .addCase(fetchSimilarMoviesAction.pending, (state, action) => {
        state.statusSimilarMovies = Status.Loading;
      })
      .addCase(fetchSimilarMoviesAction.fulfilled, (state, action) => {
        state.similarMovies = action.payload;
        state.statusSimilarMovies = Status.Success;
      })
      .addCase(fetchSimilarMoviesAction.rejected, (state, action) => {
        state.statusSimilarMovies = Status.Failed;
      })
      .addCase(fetchFavoritesMoviesAction.pending, (state, action) => {
        state.statusFavorites = Status.Loading;
      })
      .addCase(fetchFavoritesMoviesAction.fulfilled, (state, action) => {
        state.favoritesMovies = action.payload;
        state.statusFavorites = Status.Success;
      })
      .addCase(fetchFavoritesMoviesAction.rejected, (state, action) => {
        state.statusFavorites = Status.Failed;
      });
  }
});
