import { useEffect, useState } from 'react';
import { MovieProps } from '../../types/movie/movie';
import MovieImage from '../movie-image/movie-image';
import VideoCard from '../video-card/video-card';

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
      {!activeVideo ?
        <MovieImage movie={movie} movieId={movieId} /> :
        <VideoCard movie={movie} movieId={movieId} />}
    </article>
  );
}

export default Movie;
