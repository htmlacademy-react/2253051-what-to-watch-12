import { MovieProps } from '../../types/movie/movie';

type Props = {
  movie: MovieProps;
  movieId: string;
}

function MovieImage({ movie, movieId }: Props) {
  return (
    <>
      <div className="small-film-card__image">
        <img src={movie.previewImage} alt={movie.name} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        {movie.name}
      </h3>
    </>
  );
}

export default MovieImage;
