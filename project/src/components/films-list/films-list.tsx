import { MovieProps } from '../../types/movie/movie';
import Movie from '../movie/Movie';

type Props = {
  movies: MovieProps[];
  countCards?: number;
}

function FilmList({ movies, countCards }: Props): JSX.Element {
  return (
    <div className="catalog__films-list">
      {movies.slice(0, countCards).map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default FilmList;
