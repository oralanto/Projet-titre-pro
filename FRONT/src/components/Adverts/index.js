// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './style.scss';

// == Composant
const Adverts = ({
  title,
  img,
  localisation,
  locPrice,
}) => (
  <div className="Adverts">
    <h1 className="Adverts__title">Les annonces</h1>
    <div className="Adverts__container">
      <article className="Adverts__container__advert">
        <img className="Adverts__container__advert__img" src={img} alt={title} />
        <h2 className="Adverts__container__advert__title">{title}</h2>
        <div className="Adverts__container__advert__details">
          <p className="Adverts__container__advert__details__detail">{localisation}</p>
          <p className="Adverts__container__advert__details__detail">{locPrice}</p>
        </div>
      </article>
    </div>
  </div>
);

Adverts.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  localisation: PropTypes.string.isRequired,
  locPrice: PropTypes.number.isRequired,
};
// == Export
export default Adverts;
