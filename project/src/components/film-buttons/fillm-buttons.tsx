import { Link, useNavigate } from 'react-router-dom';
import { MovieProps } from '../../types/movie/movie';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getFavoritesMovies } from '../../store/movies/selectors';
import { postFavoriteMoviesAction } from '../../store/api-actions';
import { getAuthorizationStatus } from '../../store/user/selectors';
import { AppRoute, AuthorizationStatus } from '../../constants';

type Props = {
  movie: MovieProps;
  children?: JSX.Element | false;
}

function FilmButtons({ movie, children }: Props) {
  const favMovies = useAppSelector(getFavoritesMovies);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const favMoviesId = favMovies.map((film) => film.id);
  const isFavorite = favMoviesId.includes(movie.id);

  const data = {
    movieId: movie.id,
    status: isFavorite ? 0 : 1,
  };

  function handleClick() {
    if (authorizationStatus === AuthorizationStatus.Auth) {
      dispatch(postFavoriteMoviesAction(data));
    } else {
      navigate(AppRoute.Login);
    }
  }

  return (
    <div className="film-card__buttons">
      <button className="btn btn--play film-card__button" type="button">
        <Link to={`/player/${movie.id}`} className="btn--play__link">
          <svg viewBox="0 0 19 19" width="19" height="19">
            <use xlinkHref="#play-s"></use>
          </svg>
          <span>Play</span>
        </Link>
      </button>
      <button className="btn btn--list film-card__button" type="button" onClick={handleClick}>
        {isFavorite ?
          <svg viewBox="0 0 18 14" width="18" height="14">
            <use xlinkHref="#in-list"></use>
          </svg> :
          <svg viewBox="0 0 19 20" width="19" height="20">
            <use xlinkHref="#add"></use>
          </svg>}
        <span>My list</span>
        {authorizationStatus === AuthorizationStatus.Auth && <span className="film-card__count">{favMovies.length}</span>}
      </button>
      {children}
    </div>
  );
}

export default FilmButtons;
