import { useState, useEffect, useRef } from 'react';
import classnames from 'classnames/bind';
import Image from 'next/image';
import gsap from 'gsap';

import { Add, Alert, Delete } from '../../Icons';

import css from './style.module.scss';
const cx = classnames.bind(css);

const EditoCard = ({ movie, favorites, addFavorites }) => {
  const [activeBanner, setActiveBanner] = useState(false);

  const bannerRef = useRef();
  const imageRef = useRef();

  const storedMovie = favorites?.find((fav) => fav?.imdbID === movie?.imdbID);
  const favoriteDisable = storedMovie ? true : false;

  const { Poster, Title, Type, Year } = movie;

  // ------------Animation------------
  const timeline = gsap.timeline({
    defaults: { duration: 0.4, ease: 'expo.inOut' },
  });

  const revealBanner = (element, element2) => {
    timeline
      .to(
        element2,
        {
          filter: 'blur(1px)',
          duration: 0.6,
          ease: 'none',
        },
        -0.6
      )
      .to(element, {
        translateY: '0%',
      });
  };

  const hideBanner = (element, element2) => {
    timeline
      .to(
        element2,
        {
          filter: 'blur(0px)',
          duration: 0.7,
          ease: 'none',
        },
        -0.6
      )
      .to(element, {
        translateY: '100%',
      });
  };

  useEffect(() => {
    activeBanner
      ? revealBanner(bannerRef.current, imageRef.current)
      : hideBanner(bannerRef.current, imageRef.current);
  }, [activeBanner]);

  return (
    <div className={css.EditoCard}>
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
              className={css.image}
              alt="poster"
            />
          )}
        </div>
        <div
          className={css.addFavorite}
          onClick={() => !favoriteDisable && addFavorites(movie)}
          style={{ backgroundColor: favoriteDisable ? '#8c8c8c' : '#c3e301' }}
          ref={bannerRef}
        >
          {favoriteDisable ? (
            <>
              <Delete className={css.icon} />
              <span className={css.favoriteText}>Supprimer des favoris</span>
            </>
          ) : (
            <>
              <Add className={css.icon} />
              <span className={css.favoriteText}>Ajouter au favoris</span>
            </>
          )}
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
    </div>
  );
};

export default EditoCard;
