import classnames from "classnames/bind";
import EditoCard from "../../UI/EditoCard";

import css from "./style.module.scss";
const cx = classnames.bind(css);

const EditoCardList = ({ movies }) => {
  return (
    <section className={css.EditoCardList}>
      <div className={css.infos}>
        <div className={css.result}>
          <p className={css.resultText}>300</p>
        </div>
        <div className={css.filter}>
          <h4 className={css.text}>Filtrer par</h4>
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
      </div>
      <div className={css.container}>
        {movies?.Search?.map((movie, idx) => (
          <EditoCard key={`movie-${idx}`} {...movie} />
        ))}
      </div>
    </section>
  );
};

export default EditoCardList;
