import { NameSpace } from '../../constants';
import { MovieProps } from '../../types/movie/movie';
import { ReviewProps } from '../../types/review/review';
import { State } from '../../types/state';

export const getALLReview = (state: State): ReviewProps[] => state[NameSpace.Film].comments;
export const getALLReviewStatus = (state: State): string => state[NameSpace.Film].statusReviews;

export const getReviewStatus = (state: State): string => state[NameSpace.Film].status;

export const getActiveMovie = (state: State): MovieProps | null => state[NameSpace.Film].activeFilm;
export const getActiveMovieStatus = (state: State): string => state[NameSpace.Film].statusFilm;

export const getPromoMovie = (state: State): MovieProps | null => state[NameSpace.Film].movie;
