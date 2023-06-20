import { Link } from 'react-router-dom';
import styles from './not-found-screen.module.css';

function NotFoundScreen(): JSX.Element {
  return (
    <section className={styles.notFoundPage}>
      <h1 className={styles.notFoundPage__title}>Page not found</h1>
      <button className={styles.notFoundPage__button}>
        <Link to={'/'} className={styles.notFoundPage__link} >Перейти на главную страницу</Link>
      </button>
    </section>
  );
}

export default NotFoundScreen;
