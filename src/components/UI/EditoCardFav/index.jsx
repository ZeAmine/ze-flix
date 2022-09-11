import { useState, useEffect, useRef } from 'react';
import classnames from 'classnames/bind';
import Image from 'next/image';
import gsap from 'gsap';

import { Alert, Cross } from '../../Icons';

import css from './style.module.scss';
const cx = classnames.bind(css);

const EditoCardFav = ({ favorite, removeFavorites }) => {
  const [revealImage, setRevealImage] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const imageRef = useRef();

  const { Poster, Title, Type, Year } = favorite;

  // ------------Animation------------
  const timeline = gsap.timeline({
    defaults: { duration: 0.4, ease: 'expo.inOut' },
  });

  return (
    <div className={css.EditoCardFav}>
      <div
        className={css.wrapper}
        onClick={() => removeFavorites(favorite)}
        onMouseEnter={() => setRevealImage(true)}
        onMouseLeave={() => setRevealImage(false)}
      >
        <div className={css.titleContainer}>
          <Cross className={css.icon} />
          {Title && <h2 className={cx(css.text, css.title)}>{Title}</h2>}
        </div>
        <div className={css.infoContainer}>
          {Type && <h2 className={css.text}>{Type}</h2>}
          {Year && <h2 className={css.text}>({Year})</h2>}
        </div>
        <div
          className={css.imageContainer}
          style={{ visibility: revealImage ? 'visible' : 'hidden' }}
          ref={imageRef}
        >
          {!Poster || Poster === 'N/A' ? (
            <div className={css.withoutImage}>
              <Alert />
              <p className={css.imageText}>Image indisponible</p>
            </div>
          ) : (
            <Image
              src={Poster}
              layout="fill"
              objectFit="cover"
              className={isLoading ? css.image : css.imagePlaceholder}
              alt="poster"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default EditoCardFav;

{
  /* <>
  <div
    className={css.container}
    onMouseEnter={() => setActiveBanner(true)}
    onMouseLeave={() => setActiveBanner(false)}
  >
    <div className={css.imageContainer} ref={imageRef}>
      {!Poster || Poster === 'N/A' ? (
        <div className={css.withoutImage}>
          <Alert />
          <p className={css.text}>Image indisponible</p>
        </div>
      ) : (
        <Image
          src={Poster}
          layout="fill"
          objectFit="cover"
          className={isLoading ? css.image : css.imagePlaceholder}
          alt="poster"
        />
      )}
    </div>
    <div
      className={css.addFavorite}
      style={{ backgroundColor: '#8c8c8c' }}
      ref={bannerRef}
    >
      <Delete className={css.icon} />
      <span className={css.favoriteText}>Supprimer des favoris</span>
    </div>
  </div>
  <div className={css.content}>
    {Title && <p className={css.title}>{Title}</p>}
    {Type && (
      <p className={css.gender}>
        {Type} ({Year})
      </p>
    )}
  </div>
</>; */
}
