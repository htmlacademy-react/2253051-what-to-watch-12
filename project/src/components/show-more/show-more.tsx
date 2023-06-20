import { MouseEvent } from 'react';
import { MovieProps } from '../../types/movie/movie';
import './show-more.css';

type Props = {
  handleMoreFilmsShow: () => void;
  movies: MovieProps[];
  countCards: number;
}

function ShowMore({ handleMoreFilmsShow, movies, countCards }: Props) {

  function handleClick(e: MouseEvent) {
    e.preventDefault();
    handleMoreFilmsShow();
  }

  const className = countCards >= movies.length ? 'catalog__button_inactive' : 'catalog__button';

  return (
    <div className='catalog__more'>
      <button className={className} type="button" onClick={handleClick}>Show more</button>
    </div>
  );
}

export default ShowMore;
