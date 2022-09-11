import classnames from 'classnames/bind';

import css from './style.module.scss';
const cx = classnames.bind(css);

export default function Filters({ totalResults }) {
  return (
    <section className={css.Filters}>
      <div className={css.result}>
        {totalResults ? (
          <p className={css.resultText}>{totalResults}</p>
        ) : (
          <p className={css.resultText}>0</p>
        )}
      </div>
      <div className={css.filter}>
        <h4 className={cx(css.text, css.filterTitle)}>Filtrer par</h4>
        <div className={css.line} />
        <ul className={css.filterList}>
          <li className={css.filterItem}>
            <h4 className={cx(css.text, css.filterText)}>Nouveau</h4>
          </li>
          <li className={css.filterItem}>
            <h4 className={cx(css.text, css.filterText)}>Populaire</h4>
          </li>
        </ul>
      </div>
    </section>
  );
}
