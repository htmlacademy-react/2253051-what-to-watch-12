import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { MovieProps } from '../../types/movie/movie';

type Props = {
  movie: MovieProps;
  movieId: string;
}

function VideoCard({ movie, movieId }: Props) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.play();
      ref.current.volume = 0;
    }
  }, []);

  return (
    <>
      <div className="small-film-card__image">
        <video poster={movie.previewImage} muted width="280" height="175" ref={ref}>
          <source src={movie.previewVideoLink} />
        </video>
      </div>
      <h3 className="small-film-card__title">
        <Link to={movieId} className="small-film-card__link">{movie.name}</Link>
      </h3>
    </>
  );
}
export default VideoCard;
