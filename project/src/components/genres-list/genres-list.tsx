import GenreItem from '../genres-item/genres-item';

type Props = {
  handleChangeGenre: (genre: string) => void;
  genres: string[];
  activeLink: string;
}

function GenreList({ handleChangeGenre, genres, activeLink }: Props) {
  return (
    <ul className="catalog__genres-list">
      {genres.map((genre) => (
        <GenreItem genre={genre} key={genre} handleChangeGenre={handleChangeGenre} activeLink={activeLink} />
      ))}
    </ul>
  );
}

export default GenreList;
