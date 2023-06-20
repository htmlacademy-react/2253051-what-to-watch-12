import { getStatus } from '../../store/movies/selectors';
import PromoFilmCard from '../../components/promo-film-card/promo-film-card';
import Footer from '../../components/footer/footer';
import MoviesCatalog from '../../components/movies-catalog/movies-catalog';
import LoadingScreen from '../loading-screen/loading-screen';
import { useAppSelector } from '../../hooks';

function Main(): JSX.Element {
  const isLoading = useAppSelector(getStatus);

  return (
    <main >
      {isLoading === 'Loading' ? <LoadingScreen /> : <PromoFilmCard />}
      <div className="page-content">
        <MoviesCatalog />
        <Footer />
      </div>
    </main>
  );
}

export default Main;
