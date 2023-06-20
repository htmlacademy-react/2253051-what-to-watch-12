import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { fetchActiveMovieAction } from '../../store/api-actions';
import { getActiveMovie, getActiveMovieStatus } from '../../store/film/selectors';
import Header from '../../components/header/header';
import AddReviewForm from '../../components/add-review-form/add-review-form';
import LoadingScreen from '../loading-screen/loading-screen';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { Status } from '../../constants';
import './add-review.css';

function AddReview(): JSX.Element {
  const dispatch = useAppDispatch();
  const movieId = Number(useParams().id);

  useEffect(() => {
    dispatch(fetchActiveMovieAction(movieId));
  }, [movieId, dispatch]);

  const movie = useAppSelector(getActiveMovie);
  const movieStatus = useAppSelector(getActiveMovieStatus);

  if (movie === null || movieStatus === Status.Idle || movieStatus === Status.Loading) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <section className="film-card film-card--full" style={{ background: movie.backgroundColor }}>
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={movie.backgroundImage} alt="The Grand Budapest Hotel" />
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <Header>
          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`/films/${movie.id}`} className="breadcrumbs__link">{movie.name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>
        </Header>
        <div className="film-card__poster film-card__poster--small">
          <img src={movie.posterImage} alt="The Grand Budapest Hotel poster" width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <AddReviewForm />
      </div>
    </section>
  );
}

export default AddReview;
