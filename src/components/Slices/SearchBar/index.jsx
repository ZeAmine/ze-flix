import classnames from 'classnames/bind';
import { Cross } from '../../Icons';

import css from './style.module.scss';
const cx = classnames.bind(css);

const SearchBar = ({ query, setQuery, handleKeyPress }) => {
  return (
    <section className={css.SearchBar}>
      <div className={css.wrapper}>
        <input
          type="text"
          className={css.input}
          onKeyPress={handleKeyPress}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="(Rechercher...)"
          required
        />
        {query && (
          <button onClick={() => setQuery('')} className={css.button}>
            <Cross />
          </button>
        )}
      </div>
    </section>
  );
};

export default SearchBar;
