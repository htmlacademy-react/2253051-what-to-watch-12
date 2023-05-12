import FilmCard from '../../components/film-card/film-card';
import { getActiveMovie, getActiveMovieStatus, getSimilarMovieStatus, getSimilarMovies } from '../../store/film/selectors';
import { useAppDispatch, useAppSelector } from '../../hooks';
import LoadingScreen from '../loading-screen/loading-screen';
import Footer from '../../components/footer/footer';
import SortMoviesList from '../../components/sort-movies-list/sort-movies-list';
import { useParams } from 'react-router-dom';
import { fetchActiveMovieAction, fetchSimilarMoviesAction, getMovieReview } from '../../store/api-actions';
import { useEffect } from 'react';
import { Status } from '../../constants';

function Film(): JSX.Element {
  const dispatch = useAppDispatch();
  const movies = useAppSelector(getSimilarMovies);
  const moviesStatus = useAppSelector(getSimilarMovieStatus);
  const activeMovie = useAppSelector(getActiveMovie);
  const sortMovies = movies.filter((movie) => movie.id !== activeMovie?.id).slice(0, 4);

  const movieId = Number(useParams().id);

  useEffect(() => {
    dispatch(getMovieReview(movieId));
    dispatch(fetchActiveMovieAction(movieId));
    dispatch(fetchSimilarMoviesAction(movieId));
  }, [movieId, dispatch]);

  const movieStatus = useAppSelector(getActiveMovieStatus);
  const movie = useAppSelector(getActiveMovie);

  if (movie === null || movieStatus === Status.Idle || movieStatus === Status.Loading) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <>
      <FilmCard movie={movie}/>
      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          {moviesStatus === 'Loading' ? <LoadingScreen /> : <SortMoviesList sortMovies={sortMovies} />}
        </section>
        <Footer />
      </div>
    </>
  );
}

export default Film;
