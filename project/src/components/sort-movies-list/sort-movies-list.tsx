import Movie from '../movie/Movie';
import { MovieProps } from '../../types/movie/movie';

type Props = {
  sortMovies: MovieProps[];
}

function SortMoviesList({ sortMovies }: Props): JSX.Element {
  return (
    <div className="catalog__films-list">
      {sortMovies.map((movie) => (
        <Movie movie={movie} key={movie.id} />
      ))}
    </div>
  );
}

export default SortMoviesList;
