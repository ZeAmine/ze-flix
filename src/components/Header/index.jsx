import Link from "next/link";
import { Favorie, Notification, User, WatchList } from "../Icons";

import css from "./style.module.scss";
import cx from "classnames/bind";

const Header = () => {
  return (
    <header className={css.Header}>
      <div className={css.brandContainer}>
        <h1 className={css.brand}>ZE/FLIX</h1>
      </div>
      <ul className={css.navList}>
        <li className={cx(css.navCategory, css.movies)}>
          <Link href="/movies">
            <span className={css.item}>Films</span>
          </Link>
        </li>
        <li className={cx(css.navCategory, css.series)}>
          <Link href="/movies">
            <span className={css.item}>Series</span>
          </Link>
        </li>
      </ul>
      <div className={css.profile}>
        <span className={cx(css.icon, css.watchlist)}>
          <WatchList />
        </span>
        <span className={cx(css.icon, css.notification)}>
          <Notification />
        </span>
        <span className={cx(css.icon, css.user)}>
          <User />
        </span>
      </div>
    </header>
  );
};

export default Header;
