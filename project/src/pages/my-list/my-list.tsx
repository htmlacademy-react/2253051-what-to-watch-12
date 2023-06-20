import { getFavoritesMovies, getFavoritesMoviesStatus } from '../../store/movies/selectors';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import FilmList from '../../components/films-list/films-list';
import LoadingScreen from '../loading-screen/loading-screen';
import { useAppSelector } from '../../hooks';
import { Status } from '../../constants';

function MyList(): JSX.Element {
  const movies = useAppSelector(getFavoritesMovies);
  const moviesStatus = useAppSelector(getFavoritesMoviesStatus);

  return (
    <div className="user-page">
      <Header>
        <h1 className="page-title user-page__title">
          My list <span className="user-page__film-count">{movies.length}</span>
        </h1>
      </Header>
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        {moviesStatus === Status.Loading ? <LoadingScreen /> : <FilmList movies={movies} />}
      </section>
      < Footer />
    </div>
  );
}

export default MyList;
