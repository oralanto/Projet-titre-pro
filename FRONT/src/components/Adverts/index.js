// == Import npm
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// == Import
import './style.scss';
import axios from 'axios';

// == Composant
const Adverts = () => {
  console.log('coucou');
  const [adverts, setAdverts] = useState([]);

  useEffect(() => {
    axios
      .get('http://34.207.234.22/api/alladverts')
      .then((res) => setAdverts(res.data));
  }, []);
  return (
    <div className="Adverts">
      <h1 className="Adverts__title">Les annonces</h1>
      <div className="Adverts__container">
        {adverts.map((obj) => (
          <Link
            to={`annonce/${obj.advert.id}`}
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

// Adverts.propTypes = {
//   adverts: PropTypes.arrayOf (
//     PropTypes.shape({
//       advert: PropTypes.shape({
//         id: PropTypes.number,
//         title: PropTypes.string,
//         locationPrice: PropTypes.number,
//       }).isRequired,
//       user: PropTypes.shape({
//         pseudo: PropTypes.string,
//       }).isRequired,
//       localisation: PropTypes.shape({
//         city: PropTypes.string,
//       }).isRequired,
//     }),
//   ).isRequired,
// };
// == Export
export default Adverts;
