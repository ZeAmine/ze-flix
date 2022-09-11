import classnames from 'classnames/bind';
import EditoCard from '../../UI/EditoCard';
import Filters from '../Filters';
import { useAppContext } from '../../../context/state';

import css from './style.module.scss';
const cx = classnames.bind(css);

const EditoCardList = ({ movies }) => {
  const { favorites, addFavorites } = useAppContext();

  return (
    <section className={css.EditoCardList}>
      <Filters totalResults={movies.totalResults} favorites={favorites} />
      <div className={css.container}>
        {movies?.Error ? (
          <div className={css.noResult}>
            <h2 className={css.noResultText}>Aucun film trouvé !</h2>
            <p className={css.retryText}>(Essayez une nouvelle recheche)</p>
          </div>
        ) : (
          movies?.Search.map((movie, idx) => (
            <EditoCard
              key={`movie-${idx}`}
              movie={movie}
              favorites={favorites}
              addFavorites={addFavorites}
            />
          ))
        )}
      </div>
    </section>
  );
};

export default EditoCardList;
