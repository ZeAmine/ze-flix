import classnames from 'classnames/bind';
import Filters from '../Filters';
import EditoCardFav from '../../UI/EditoCardFav';

import css from './style.module.scss';
const cx = classnames.bind(css);

const EditoCardListFav = ({ favorites }) => {
  return (
    <section className={css.EditoCardListFav}>
      <div className={css.container}>
        {favorites.length > 0 ? (
          favorites?.map((favorite, idx) => (
            <EditoCardFav key={`favorite-${idx}`} favorite={favorite} />
          ))
        ) : (
          <div className={css.noResult}>
            <h2 className={css.noResultText}>Aucun film en favoris !</h2>
            <p className={css.retryText}>(Ajouter un film des maintenants)</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default EditoCardListFav;
