import Image from "next/image";
import black from "./black-panther.webp";

import { Add } from "../../Icons";

import css from "./style.module.scss";
import cx from "classnames/bind";

const EditoCard = () => {
  return (
    <div className={css.EditoCard}>
      <div className={css.container}>
        <div className={css.imageContainer}>
          <Image src={black} className={css.image} layout="fill" alt="poster" />
        </div>
        <div className={css.addFavorite}>
          <Add className={css.iconAdd} />
          <span className={css.favoriteText}>Ajouter au favoris</span>
        </div>
      </div>
      <div className={css.content}>
        <p className={css.title}>Black Panther</p>
        <p className={css.gender}>Action - Super heroes</p>
      </div>
    </div>
  );
};

export default EditoCard;
