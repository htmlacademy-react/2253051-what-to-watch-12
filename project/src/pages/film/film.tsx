import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getActiveMovie, getActiveMovieStatus } from '../../store/film/selectors';
import { fetchActiveMovieAction, fetchSimilarMoviesAction, getMovieReview } from '../../store/api-actions';
import { getSimilarMovieStatus, getSimilarMovies } from '../../store/movies/selectors';
import FilmCard from '../../components/film-card/film-card';
import Footer from '../../components/footer/footer';
import SortedMoviesList from '../../components/sorted-movies-list/sorted-movies-list';
import { useAppDispatch, useAppSelector } from '../../hooks';
import LoadingScreen from '../loading-screen/loading-screen';
import { Status } from '../../constants';
import ErrorScreen from '../error-screen/error-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';

function Film(): JSX.Element {
  const dispatch = useAppDispatch();
  const movies = useAppSelector(getSimilarMovies);
  const similarMoviesStatus = useAppSelector(getSimilarMovieStatus);
  const activeMovie = useAppSelector(getActiveMovie);
  const movieStatus = useAppSelector(getActiveMovieStatus);
  const sortedMovies = movies.filter((movie) => movie.id !== activeMovie?.id).slice(0, 4);

  const movieId = Number(useParams().id);

  useEffect(() => {
    dispatch(getMovieReview(movieId));
    dispatch(fetchActiveMovieAction(movieId));
    dispatch(fetchSimilarMoviesAction(movieId));
  }, [movieId, dispatch]);

  const movie = useAppSelector(getActiveMovie);

  if (movieStatus === Status.Idle || movieStatus === Status.Loading) {
    return (
      <LoadingScreen />
    );
  } else if (movie === null) {
    return(
      <NotFoundScreen />
    );
  }

  return (
    <>
      <FilmCard movie={movie} />
      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          {similarMoviesStatus === Status.Failed ? <ErrorScreen /> : <SortedMoviesList sortedMovies={sortedMovies} />}
        </section>
        <Footer />
      </div>
    </>
  );
}

export default Film;
