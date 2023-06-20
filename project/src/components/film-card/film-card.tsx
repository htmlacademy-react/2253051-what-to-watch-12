import Header from '../header/header';
import FilmInfo from '../film-info/film-info';
import FilmCardBack from '../film-card-back/film-card-back';
import { MovieProps } from '../../types/movie/movie';

type Props = {
  movie: MovieProps;
}

function FilmCard({ movie }: Props): JSX.Element {
  return (
    <section className="film-card film-card--full" style={{ background: movie.backgroundColor }}>
      <div className="film-card__hero">
        <div className="film-card__bg">
          <img src={movie.backgroundImage} alt={movie.name} />
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <Header />
        <FilmCardBack movie={movie} />
      </div>
      <div className="film-card__wrap film-card__translate-top">
        <div className="film-card__info">
          <div className="film-card__poster film-card__poster--big">
            <img src={movie.posterImage} alt={movie.name} width="218" height="327" />
          </div>
          <FilmInfo movie={movie} />
        </div>
      </div>
    </section>
  );
}

export default FilmCard;
