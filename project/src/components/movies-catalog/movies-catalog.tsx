import { useState, useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getMovies, getStatus } from '../../store/movies/selectors';
import { getGenre } from '../../store/app/selectors';
import { changeGenre } from '../../store/app/app';
import FilmList from '../films-list/films-list';
import GenreList from '../genres-list/genres-list';
import ShowMore from '../show-more/show-more';
import LoadingScreen from '../../pages/loading-screen/loading-screen';

function MoviesCatalog(): JSX.Element {
  const dispatch = useAppDispatch();
  const [countCards, setCountCards] = useState(8);
  const selectedGenre = useAppSelector(getGenre);
  const isLoading = useAppSelector(getStatus);
  let movies = useAppSelector(getMovies);

  //const sortedMovies = useMemo(() => movies.filter((movie) => movie.genre === selectedGenre), [movies, selectedGenre]);

  const sortedMovies = movies.filter((movie) => movie.genre === selectedGenre);
  //const sorted = useMemo(() => new Set(movies.map((movie) => movie.genre)), [movies]);
  //let genres = ['All genres', ...sorted];
  let genres = ['All genres', ...new Set(movies.map((movie) => movie.genre))];
  //let genres = React.useMemo(() => ['All genres', ...new Set(movies.map((movie) => movie.genre))], [movies]);
  if(genres.length > 9) {
    genres = genres.splice(0, 9);
  }
  const [activeLink, setActiveLink] = useState('All genres');

  const handleChangeGenre = (genre: string) => {
    dispatch(changeGenre(genre));
    setActiveLink(genre);
    setCountCards(8);
  };

  if (selectedGenre !== 'All genres') {
    movies = sortedMovies;
  }

  const handleMoreFilmsShow = () => {
    if (movies.length !== 0) {
      setCountCards(countCards + 8);
    }
  };

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      <GenreList handleChangeGenre={handleChangeGenre} genres={genres} activeLink={activeLink} />
      {isLoading === 'Loading' ? <LoadingScreen /> :
        <FilmList movies={movies} countCards={countCards} />}
      <ShowMore handleMoreFilmsShow={handleMoreFilmsShow} movies={movies} countCards={countCards} />
    </section>
  );
}

export default MoviesCatalog;
