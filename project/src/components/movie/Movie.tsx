import { useEffect, useState } from 'react';
import { MovieProps } from '../../types/movie/movie';
import MovieImage from '../movie-image/movie-image';
import VideoCard from '../video-card/video-card';
import { Link } from 'react-router-dom';

type Props = {
  movie: MovieProps;
}

function Movie({ movie }: Props): JSX.Element {
  const { id } = movie;
  const movieId = `/films/${id}`;
  const [activeVideo, setActiveVideo] = useState(false);
  const [activeMovieCard, setActiveMovieCard] = useState<null | number>(null);

  function mouseOverHandler() {
    if (setActiveMovieCard !== undefined) {
      setActiveMovieCard(id);
    }
  }

  function mouseLeaveHandler() {
    if (setActiveMovieCard !== undefined) {
      setActiveMovieCard(null);
    }
  }

  useEffect(() => {
    if (activeMovieCard) {
      const timer = setTimeout(() => {
        setActiveVideo(true);
      }, 1000);
      return () => {
        clearTimeout(timer);
        setActiveVideo(false);
      };
    } else {
      setActiveVideo(false);
    }
  }, [activeMovieCard]);

  return (
    <article className="small-film-card catalog__films-card" onMouseOver={mouseOverHandler} onMouseLeave={mouseLeaveHandler}>
      <Link to={movieId} className='small-film-card__link'>
        {!activeVideo ?
          <MovieImage movie={movie} movieId={movieId} /> :
          <VideoCard movie={movie} movieId={movieId} />}
      </Link>
    </article>
  );
}

export default Movie;
