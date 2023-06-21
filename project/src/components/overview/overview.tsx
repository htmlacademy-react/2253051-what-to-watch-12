import { callRating } from '../../constants';
import { MovieProps } from '../../types/movie/movie';

type Props = {
  movie: MovieProps;
}

function Overview({ movie }: Props) {
  const movieRating = callRating(movie.rating);
  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{movie.rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{movieRating}</span>
          <span className="film-rating__count">{movie.scoresCount} ratings</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{movie.description} </p>
        <p className="film-card__director">
          <strong>Director: {movie.director}</strong>
        </p>
        <p className="film-card__starring">
          <strong>
            Starring: {movie.starring.join(', ')}
          </strong>
        </p>
      </div>
    </>
  );
}

export default Overview;
