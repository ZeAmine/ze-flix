import classnames from 'classnames/bind';
import Link from 'next/link';
import { useAppContext } from '../../context/state';
import { Brand } from '../Icons';

import css from './style.module.scss';
const cx = classnames.bind(css);

const Header = () => {
  const { favorites, totalResults } = useAppContext();

  return (
    <header className={css.Header}>
      <div className={css.brandContainer}>
        <Link href="/">
          <Brand className={css.brand} />
        </Link>
      </div>
      <ul className={css.navList}>
        <li className={cx(css.navItem, css.home)}>
          <Link href="/">
            <span className={css.itemContainer}>
              <h4 className={css.text}>Accueil</h4>
              <span className={css.number}>{totalResults}</span>
            </span>
          </Link>
        </li>
        <li className={cx(css.navItem, css.favorite)}>
          <Link href="/favorites">
            <span className={css.itemContainer}>
              <h4 className={css.text}>Favoris</h4>
              <span className={css.number}>{favorites.length}</span>
            </span>
          </Link>
        </li>
        <li className={cx(css.navItem, css.profile)}>
          <Link href="/">
            <span className={css.itemContainer}>
              <h4 className={cx(css.text, css.name)}>AMINE</h4>
            </span>
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
