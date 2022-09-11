import classnames from 'classnames/bind';
import Filters from '../Filters';
import EditoCardFav from '../../UI/EditoCardFav';

import css from './style.module.scss';
const cx = classnames.bind(css);

const EditoCardListFav = ({ favorites }) => {
  return (
    <section className={css.EditoCardListFav}>
      <div className={css.wrapper}>
        <div className={css.labels}>
          <div className={css.labelTitle}>
            <h4 className={css.labelText}>Titres</h4>
          </div>
          <div className={css.labelInfos}>
            <h4 className={css.labelText}>Genres</h4>
            <h4 className={css.labelText}>(Dates)</h4>
          </div>
          <div className={css.labelImage}>
            <h4 className={css.labelText}>Poster</h4>
          </div>
        </div>
        <div className={css.container}>
          {favorites.length > 0 ? (
            favorites?.map((favorite, idx) => (
              <EditoCardFav key={`favorite-${idx}`} favorite={favorite} />
            ))
          ) : (
            <div className={css.noResult}>
              <h2 className={css.noResultText}>Aucun film en favoris !</h2>
              <p className={css.retryText}>(Ajoutez un film des maintenants)</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default EditoCardListFav;
