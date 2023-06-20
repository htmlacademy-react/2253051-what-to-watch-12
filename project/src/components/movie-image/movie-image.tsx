import { Link } from 'react-router-dom';
import { MovieProps } from '../../types/movie/movie';

type Props = {
  movie: MovieProps;
  movieId: string;
}

function handleClick() {
  window.scrollTo(0, 0);
}

function MovieImage({ movie, movieId }: Props) {
  return (
    <>
      <div className="small-film-card__image">
        <img src={movie.previewImage} alt={movie.name} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link to={movieId} className="small-film-card__link" onClick={handleClick}>{movie.name}</Link>
      </h3>
    </>
  );
}

export default MovieImage;
