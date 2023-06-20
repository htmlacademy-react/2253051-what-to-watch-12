import { MouseEvent } from 'react';
import { Link } from 'react-router-dom';

type Props = {
  name: string;
  setActiveLink: (tab: string) => void;
  activeLink: string;
}

function FilmNav({ name, setActiveLink, activeLink}: Props) {
  function handleClick(event: MouseEvent<HTMLElement>) {
    event.preventDefault();
    setActiveLink(name);
  }

  const className = `film-nav__item ${activeLink.toLowerCase() === name.toLowerCase() ? 'film-nav__item--active' : ''}`;
  return (
    <li className={className} onClick={handleClick}>
      <Link to={name.toLowerCase()} className="film-nav__link">{name}</Link>
    </li>
  );
}

export default FilmNav;
