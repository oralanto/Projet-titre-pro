// == Import npm
import React from 'react';

// == Import
import './style.scss';

// == Composant
const Advert = () => (
  <div className="Advert">
    <a className="Advert__return">--Précedent</a>
    <article className="Advert__content">
      <div className="Advert__content__left">
        <img
          className="Advert__content__left__img"
          src="data:image/jpeg;base64,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"
          alt="fourchette"
        />
        <p className="Advert__content__left__text">Publiée 3 mois avant JC </p>
        <p className="Advert__content__left__text">Par Toto El Famoso</p>
        <p className="Advert__content__left__text__localisation">
          A proximités de :
        </p>
        <div className="Advert__content__left__localisation">
          <img
            className="Advert__content__left__localisation__img"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7MbRrwlP4MtsSXkIG-XBxvCnAQi5NuzQpqQ&usqp=CAU"
            alt="map"
          />
          <p className="Advert__content__left__localisation__imgtext">
            L'enfer (le vrai)
          </p>
        </div>
      </div>
      <div className="Advert__content__right">
        <div className="Advert__content__right__desc">
          <h1 className="Advert__content__right__desc__title">
            Le jeux de la fourchette
          </h1>
          <div className="Advert__content__right__desc__details">
            <div className="Advert__content__right__desc__details__category">
              <p className="Advert__content__right__desc__details__category__tag">
                Ludique
              </p>
              <p className="Advert__content__right__desc__details__category__tag">
                Famille
              </p>
            </div>
            <p className="Advert__content__right__desc__details__detail">
              6+ / Edité par le diable /<a> plus d'info</a>
            </p>
          </div>
          <p className="Advert__content__right__desc__description">
            Le jeu de la fourchette est un jeu destiné à vous faire perdre la
            tête, au vrai sens du terme, vous allez vraiment perdre
            litteralement votre tête et le jeu ettecruof prendras votre âme.
            N'ayez crainte vous aurez le temps de me renvoyer le jeux via
            colissimo avant que le jeu fasse effet.
          </p>
        </div>
        <div className="Advert__content__right__contact">
          <p className="Advert__content__right__contact__price">1000€/jour fdp compris</p>
          <button type="button" className="Advert__content__right__contact__button">
            Contacter le loueur
          </button>
        </div>
      </div>
    </article>
  </div>
);

// == Export
export default Advert;
