import { useState, useEffect, useRef } from "react";
import classnames from "classnames/bind";
import Image from "next/image";
import gsap from "gsap";

import black from "./black-panther.webp";
import { Add, Alert } from "../../Icons";

import css from "./style.module.scss";
const cx = classnames.bind(css);

const EditoCard = ({ Poster, Title, Type, Year }) => {
  const [activeBanner, setActiveBanner] = useState(false);
  const bannerRef = useRef();
  const imageRef = useRef();

  const timeline = gsap.timeline({
    defaults: { duration: 0.4, ease: "expo.inOut" },
  });

  const revealBanner = (element, element2) => {
    timeline
      .to(
        element2,
        {
          filter: "blur(1px)",
          duration: 0.6,
          ease: "none",
        },
        -0.6
      )
      .to(element, {
        translateY: "0%",
      });
  };

  const hideBanner = (element, element2) => {
    timeline
      .to(
        element2,
        {
          filter: "blur(0px)",
          duration: 0.7,
          ease: "none",
        },
        -0.5
      )
      .to(element, {
        translateY: "100%",
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
        <div className={css.imageContainer}>
          {!Poster || Poster === "N/A" ? (
            <div className={css.withoutImage}>
              <Alert />
              <p className={css.text}>Image indisponible</p>
            </div>
          ) : (
            <img
              src={Poster}
              alt="poster"
              className={css.image}
              ref={imageRef}
            />
          )}

          {/* <Image
            src={Poster}
            className={css.image}
            layout="fill"
            alt="poster"
          /> */}
        </div>
        <div className={css.addFavorite} ref={bannerRef}>
          <Add className={css.iconAdd} />
          <span className={css.favoriteText}>Ajouter au favoris</span>
        </div>
      </div>
      <div className={css.content}>
        <p className={css.title}>{Title}</p>
        <p className={css.gender}>
          {Type} - {Year}
        </p>
      </div>
    </div>
  );
};

export default EditoCard;
