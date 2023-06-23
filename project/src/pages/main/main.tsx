import PromoFilmCard from '../../components/promo-film-card/promo-film-card';
import Footer from '../../components/footer/footer';
import MoviesCatalog from '../../components/movies-catalog/movies-catalog';
import LoadingScreen from '../loading-screen/loading-screen';
import { useAppSelector } from '../../hooks';
import { Status } from '../../constants';
import ErrorScreen from '../error-screen/error-screen';
import { getPromoMovieStatus } from '../../store/film/selectors';

function Main(): JSX.Element {
  const isLoading = useAppSelector(getPromoMovieStatus);

  const showPromoFilm = () => {
    switch (isLoading) {
      case Status.Loading:
        return <LoadingScreen />;
      case Status.Failed:
        return <ErrorScreen/>;
      case Status.Success:
        return <PromoFilmCard/>;
    }
  };

  return (
    <main >
      {showPromoFilm()}
      <div className="page-content">
        <MoviesCatalog />
        <Footer />
      </div>
    </main>
  );
}

export default Main;
