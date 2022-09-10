import classnames from 'classnames/bind';

import css from './style.module.scss';
const cx = classnames.bind(css);

const SearchBar = ({ search, query, setQuery }) => {
  return (
    <section className={css.SearchBar}>
      <div className={css.wrapper}>
        <div className={css.inputContainer}>
          <input
            type="text"
            className={css.input}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="(Rechercher...)"
            required
          />
          <button onClick={search} className={css.button}>
            Rechercher
          </button>
          <button onClick={() => setQuery('')} className={css.button}>
            Supprimer
          </button>
        </div>
      </div>
    </section>
  );
};

export default SearchBar;
