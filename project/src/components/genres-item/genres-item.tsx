import { MouseEvent, useMemo } from 'react';
import { Link } from 'react-router-dom';

type Props = {
  genre: string;
  handleChangeGenre: (genre: string) => void;
  activeLink: string;
}

function getClassName(isGenreActive: boolean) {
  return `catalog__genres-item ${isGenreActive ? 'catalog__genres-item--active' : ''}`;
}

function GenreItem({ genre, handleChangeGenre, activeLink }: Props) {
  const isGenreActive = activeLink === genre;
  const className = useMemo(() => getClassName(isGenreActive), [isGenreActive]);

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
