import { useState, useMemo, useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getMovies, getStatus } from '../../store/movies/selectors';
import { getGenre } from '../../store/app/selectors';
import { changeGenre } from '../../store/app/app';
import FilmList from '../films-list/films-list';
import GenreList from '../genres-list/genres-list';
import ShowMore from '../show-more/show-more';
import LoadingScreen from '../../pages/loading-screen/loading-screen';
import { Status } from '../../constants';
import { MovieProps } from '../../types/movie/movie';

const DEFAULT_GENRE = 'All genres';
const DEFAULT_COUNT = 8;

const getGenres = (movies: MovieProps[]) => {
  let genres = [DEFAULT_GENRE, ...new Set(movies.map((movie) => movie.genre))];
  if(genres.length > 9) {
    genres = genres.splice(0, 9);
  }

  return genres;
};

const getSortedMovies = (movies: MovieProps[], selectedGenre: string) => {
  if (selectedGenre !== DEFAULT_GENRE) {
    return movies.filter((movie) => movie.genre === selectedGenre);
  }
  return movies;
};

function MoviesCatalog(): JSX.Element {
  const dispatch = useAppDispatch();
  const [countCards, setCountCards] = useState(8);
  const selectedGenre = useAppSelector(getGenre);
  const isLoading = useAppSelector(getStatus);
  const movies = useAppSelector(getMovies);

  const genres = useMemo(() => getGenres(movies), [movies]);
  const sortedMovies = useMemo(() => getSortedMovies(movies, selectedGenre), [movies, selectedGenre]);

  const handleChangeGenre = (genre: string) => {
    dispatch(changeGenre(genre));
    setCountCards(DEFAULT_COUNT);
  };

  const handleMoreFilmsShow = useCallback(() => {
    if (movies.length !== 0) {
      setCountCards(countCards + 8);
    }
  }, [countCards, movies.length]);

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      <GenreList handleChangeGenre={handleChangeGenre} genres={genres} activeLink={selectedGenre} />
      {isLoading === Status.Loading ? <LoadingScreen /> :
        <FilmList movies={sortedMovies} countCards={countCards} />}
      <ShowMore handleMoreFilmsShow={handleMoreFilmsShow} movies={movies} countCards={countCards} />
    </section>
  );

}

export default MoviesCatalog;
