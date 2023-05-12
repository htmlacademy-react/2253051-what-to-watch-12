import Header from '../header/header';
import './promo-film-card.css';
import { useAppSelector } from '../../hooks';
import { getPromoMovie } from '../../store/movies/selectors';
import FilmButtons from '../film-buttons/fillm-buttons';

function PromoFilmCard() {
  const promoMovie = useAppSelector(getPromoMovie);
  if(promoMovie === null) {
    return <p>Информация по фильму не найдена</p>;
  }

  return (
    <section className="film-card">
      <div className="film-card__bg">
        <img src={promoMovie.backgroundImage} alt={promoMovie.name} />
      </div>
      <h1 className="visually-hidden">WTW</h1>
      <Header />
      <div className="film-card__wrap">
        <div className="film-card__info">
          <div className="film-card__poster">
            <img src={promoMovie.posterImage} alt={promoMovie.name} width="218" height="327" />
          </div>

          <div className="film-card__desc">
            <h2 className="film-card__title">{promoMovie.name}</h2>
            <p className="film-card__meta">
              <span className="film-card__genre">{promoMovie.genre}</span>
              <span className="film-card__year">{promoMovie.released}</span>
            </p>
            <FilmButtons movie={promoMovie} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default PromoFilmCard;