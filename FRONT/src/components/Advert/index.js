// == Import npm
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Field from 'src/containers/Field';
// == Import
import './style.scss';
import axios from 'axios';

// == Composant
const Advert = ({
  onSubmitContactAdvertForm,
  user,
}) => {
  const [advert, setAdvert] = useState(null);
  const [readyForRender, setReadyForRender] = useState(false);

  const thisOnSubmit = (event) => {
    event.preventDefault();
    onSubmitContactAdvertForm(event.target[0].value, advert.advert.id);
  };

  useEffect(() => {
    const getAdvert = async () => {
      try {
        const res = await axios
          .get(`http://34.207.234.22/api${window.location.pathname}`);
        setAdvert(res.data);
        setReadyForRender(true);
      }
      catch (err) {
        console.log('err', err);
      }
    };
    getAdvert();
  }, []);

  if (readyForRender) {
    return (
      <div className="Advert">
        <div className="Advert__content__left">
          <img
            className="Advert__content__left__img"
            src={advert.advert.advertImage}
            alt={advert.advert.title}
          />
          <p className="Advert__content__left__text">Publiée le {advert.advert.publicationDate}</p>
          <p className="Advert__content__left__text">Par {advert.user.pseudo}</p>
          <p className="Advert__content__left__text__localisation">
            A proximité de :
          </p>
          <div className="Advert__content__left__localisation">
            <img
              className="Advert__content__left__localisation__img"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7MbRrwlP4MtsSXkIG-XBxvCnAQi5NuzQpqQ&usqp=CAU"
              alt="map"
            />
            <p className="Advert__content__left__localisation__imgtext">
              {advert.localisation.city}
            </p>
          </div>
        </div>
        <div className="Advert__content__right">
          <div className="Advert__content__right__desc">
            <h1 className="Advert__content__right__desc__title">
              {advert.advert.title}
            </h1>
            <div className="Advert__content__right__desc__details">
              <div className="Advert__content__right__desc__details__category">
                {advert.category.map((obj) => (
                  <p className="Advert__content__right__desc__details__category__tag">
                    {obj.name}
                  </p>
                ))}
              </div>
              <p className="Advert__content__right__desc__details__detail">
                {advert.advert.advertSuggestedAge} ans et +
                / Edité par {advert.advert.advertAuthor}
                /<a> plus d'info</a>
              </p>
            </div>
            <p className="Advert__content__right__desc__description">{advert.advert.description}
            </p>
          </div>
          <div className="Advert__content__right__contact">
            <p className="Advert__content__right__contact__price">{advert.advert.locationPrice}€/jour</p>
            <form className="Advert__content__right__contact__form" onSubmit={thisOnSubmit}>
              <textarea
                className="Advert__content__right__contact__form__message"
                rows="10"
                placeholder="Laisser votre message"
              />
              <button type="submit" className="Advert__content__right__contact__button">
                Contacter {advert.user.pseudo}
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
  return <span> En cours de chargement...</span>;
};

Advert.propTypes = {
  onSubmitContactAdvertForm: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
};
// == Export
export default Advert;
