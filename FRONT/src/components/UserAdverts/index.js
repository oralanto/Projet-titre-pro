// == Import npm
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// == Import
import './style.scss';
import axios from 'axios';

// == Composant
const UserAdverts = () => {
  const [adverts, setAdverts] = useState([]);

  useEffect(() => {
    axios
      .get('http://34.207.234.22/api/useradverts')
      .then((res) => setAdverts(res.data));
  }, []);

  return (
    <div className="Adverts">
      <h1 className="Adverts__title">Mes annonces</h1>
      <div className="Adverts__container">
        {adverts.map((obj) => (
          <Link
            to={`adverts/${obj.advert.id}`}
            key={obj.advert.id}
            className="Adverts__container__advert"
          >
            <img className="Adverts__container__advert__img" src={obj.advert.advertImage} alt={obj.advert.id} />
            <h2 className="Adverts__container__advert__title">{obj.advert.title}</h2>
            <div className="Adverts__container__advert__details">
              <p className="Adverts__container__advert__details__detail">{obj.localisation.city}</p>
              <p className="Adverts__container__advert__details__detail">{obj.advert.locationPrice}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

// == Export
export default UserAdverts;
