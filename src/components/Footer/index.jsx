import classnames from 'classnames/bind';

import css from './style.module.scss';
const cx = classnames.bind(css);

const Footer = () => {
  return (
    <footer className={css.Footer}>
      <div className={css.container}>
        <h4 className={css.text}>
          Copyright © 2022 — 2023 Amine Zegmou. Tous droits réservés.
        </h4>
      </div>
    </footer>
  );
};

export default Footer;
