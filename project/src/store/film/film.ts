import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, Status } from '../../constants';
import { fetchActiveMovieAction, fetchPromoMovieAction, getMovieReview, postMovieReview } from '../api-actions';
import { ReviewProps } from '../../types/review/review';
import { MovieProps } from '../../types/movie/movie';

type InitialState = {
  statusReviews: string;
  comments: ReviewProps[];
  comment: ReviewProps[];
  status: string;
  statusFilm: string;
  activeFilm: MovieProps | null;
  movie: null | MovieProps;
};

const initialState: InitialState = {
  statusReviews: Status.Idle,
  comments: [],
  comment: [],
  status: Status.Idle,
  statusFilm: Status.Idle,
  activeFilm: null,
  movie: null,
};

export const filmProcess = createSlice({
  name: NameSpace.Film,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(postMovieReview.pending, (state) => {
        state.status = Status.Loading;
      })
      .addCase(postMovieReview.fulfilled, (state, action) => {
        state.status = Status.Success;
        state.comment = action.payload;
      })
      .addCase(postMovieReview.rejected, (state) => {
        state.status = Status.Failed;
      })
      .addCase(getMovieReview.pending, (state) => {
        state.statusReviews = Status.Loading;
      })
      .addCase(getMovieReview.fulfilled, (state, action) => {
        state.statusReviews = Status.Success;
        state.comments = action.payload;
      })
      .addCase(getMovieReview.rejected, (state) => {
        state.statusReviews = Status.Failed;
      })
      .addCase(fetchActiveMovieAction.pending, (state) => {
        state.statusFilm = Status.Loading;
      })
      .addCase(fetchActiveMovieAction.fulfilled, (state, action) => {
        state.activeFilm = action.payload;
        state.statusFilm = Status.Success;
      })
      .addCase(fetchActiveMovieAction.rejected, (state) => {
        state.statusFilm = Status.Failed;
      })
      .addCase(fetchPromoMovieAction.pending, (state, action) => {
        state.status = Status.Loading;
      })
      .addCase(fetchPromoMovieAction.fulfilled, (state, action) => {
        state.movie = action.payload;
        state.status = Status.Success;
      })
      .addCase(fetchPromoMovieAction.rejected, (state, action) => {
        state.status = Status.Failed;
      });
  }
});
