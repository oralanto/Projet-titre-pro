// == Import npm
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

// == Import
import './style.scss';
import logo from '../../../img/Logo_phase_3_Complet.svg';

// == Composant
const Home = () => {
  const [advert, setAdvert] = useState([]);
  const [readyForRender, setReadyForRender] = useState(false);

  useEffect(() => {
    const getAdvert = async () => {
      try {
        const res = await axios
          .get('http://34.207.234.22/api/recent-advert');
        setAdvert(res.data);
        setReadyForRender(true);
      }
      catch (err) {
        console.log('err', err);
      }
    };
    getAdvert();
  }, []);

  return (
    <div className="home">
      { readyForRender && (
        <>
          <div className="home__search">
            <p> Vous savez ce que vous cherchez ?</p>
            <input className="home__search__bar" placeholder="7 Wonders, Monopoly..." type="text" />
          </div>
          <div className="home__center">
            <div className="home__text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
            </div>
            <div className="home__logo">
              <img className="home__logo" src={logo} alt="logo" />
            </div>
            <h2 className="home__advert__title">Derniere annonce publiée</h2>
            <Link
              to={`adverts/${advert.advert.id}`}
              key={advert.advert.id}
              className="Adverts__container__advert"
            >
              <div className="Adverts__container__advert__img__container">
                <img className="Adverts__container__advert__img__container__img" src={advert.advert.advertImage} alt={advert.id} />
              </div>
              <div>
                <h2 className="Adverts__container__advert__title">{advert.advert.title}</h2>
                <div className="Adverts__container__advert__details">
                  <p className="Adverts__container__advert__details__detail">{advert.localisation.city}</p>
                  <p className="Adverts__container__advert__details__detail">{advert.advert.locationPrice} €</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="home__categories">
            <p className="home__categories__title">Catégories</p>
            <ul className="home__categories__cat">
              <li className="home__categories__link">Ambiance</li>
              <li className="home__categories__link">Famille</li>
              <li className="home__categories__link">Hasard</li>
              <li className="home__categories__link">Plateau</li>
              <li className="home__categories__link">Rôle</li>
              <li className="home__categories__link">Stratégie</li>
            </ul>
          </div>
        </>
      )}
      {!readyForRender && (
        <h1>Loadding</h1>
      )}

    </div>
  );
};

// == Export
export default Home;
