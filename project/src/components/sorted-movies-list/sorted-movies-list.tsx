import Movie from '../movie/Movie';
import { MovieProps } from '../../types/movie/movie';

type Props = {
  sortedMovies: MovieProps[];
}

function SortedMoviesList({ sortedMovies }: Props): JSX.Element {
  return (
    <div className="catalog__films-list">
      {sortedMovies.map((movie) => (
        <Movie movie={movie} key={movie.id} />
      ))}
    </div>
  );
}

export default SortedMoviesList;
