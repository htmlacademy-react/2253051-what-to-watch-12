import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { LINKS } from '../../constants';
import Overview from '../overview/overview';
import Details from '../details/details';
import Reviews from '../reviews/reviews';
import { MovieProps } from '../../types/movie/movie';
import FilmNav from '../film-nav/film-nav';

type Props = {
  movie: MovieProps;
}

function FilmInfo({ movie }: Props): JSX.Element {
  const params = useParams();
  const [activeLink, setActiveLink] = useState(params.info || 'overview');
  const showMovieInformation = () => {
    switch (activeLink) {
      case 'overview':
        return <Overview movie={movie} />;
      case 'details':
        return <Details movie={movie} />;
      case 'reviews':
        return <Reviews />;
      default:
        return <Overview movie={movie} />;
    }
  };

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          {LINKS.map((li) => (
            <FilmNav key={li.id} name={li.name} setActiveLink={setActiveLink} activeLink={activeLink} />
          ))}
        </ul>
      </nav>
      {showMovieInformation()}
    </div>
  );
}

export default FilmInfo;
