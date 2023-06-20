import { MouseEvent } from 'react';
import { Link } from 'react-router-dom';

type Props = {
  genre: string;
  handleChangeGenre: (genre: string) => void;
  activeLink: string;
}

function GenreItem({ genre, handleChangeGenre, activeLink }: Props) {
  const className = `catalog__genres-item ${activeLink === genre ? 'catalog__genres-item--active' : ''}`;
  function handleClick(e: MouseEvent<HTMLElement>) {
    e.preventDefault();
    handleChangeGenre(genre);
  }

  return (
    <li className={className}>
      <Link to='#' className="catalog__genres-link" onClick={handleClick}>{genre}</Link>
    </li>
  );
}

export default GenreItem;
