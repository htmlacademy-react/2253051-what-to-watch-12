import { NameSpace } from '../../constants';
import { MovieProps } from '../../types/movie/movie';
import { State } from '../../types/state';

export const getMovies = (state: State): MovieProps[] => state[NameSpace.Movies].movies;
export const getStatus = (state: State): string => state[NameSpace.Movies].status;

export const getFavoritesMovies = (state: State): MovieProps[] => state[NameSpace.Movies].favoritesMovies;
export const getFavoritesMoviesStatus = (state: State): string => state[NameSpace.Movies].statusFavorites;

export const getSimilarMovies = (state: State): MovieProps[] => state[NameSpace.Movies].similarMovies;
export const getSimilarMovieStatus = (state: State): string => state[NameSpace.Movies].statusSimilarMovies;
