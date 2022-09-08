import css from "./style.module.scss";
import cx from "classnames/bind";

const SearchBar = () => {
  return (
    <section className={css.SearchBar}>
      <div className={css.wrapper}>
        <div className={css.inputContainer}>
          <input
            type="text"
            className={css.input}
            placeholder="(Rechercher...)"
          />
        </div>
      </div>
    </section>
  );
};

export default SearchBar;
