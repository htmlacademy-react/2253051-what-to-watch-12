import { memo } from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { getAuthorizationStatus } from '../../store/user/selectors';
import { AuthorizationStatus } from '../../constants';
import FilmButtons from '../film-buttons/fillm-buttons';
import { MovieProps } from '../../types/movie/movie';

type Props = {
  movie: MovieProps;
}

function FilmCardBack({ movie }: Props): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  return (
    <div className="film-card__wrap">
      <div className="film-card__desc">
        <h2 className="film-card__title">{movie.name}</h2>
        <p className="film-card__meta">
          <span className="film-card__genre">{movie.genre}</span>
          <span className="film-card__year">{movie.released}</span>
        </p>
        <FilmButtons movie={movie}>
          {authorizationStatus === AuthorizationStatus.Auth &&
            <Link to={`/films/${movie.id}/review`} className="btn film-card__button">
              Add review
            </Link>}
        </FilmButtons>
      </div>
    </div>
  );
}

export default memo(FilmCardBack);
