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
            <div className="home__text">
              <p>
                Bienvenue sur O'Boardgame, premier site français de location de jeux de société de particulier à particulier !
              </p>
            </div>
      { readyForRender && (
        <>
          <div className="home__search">
            <p className="home__search__title"> Vous savez ce que vous cherchez ?</p>
            <input className="home__search__bar" placeholder="7 Wonders, Monopoly..." type="text" />
          </div>
          <div className="home__center">
            <div className="home__logo">
              <img className="home__logo__img" src={logo} alt="logo" />
            </div>
            <div className="home__advert">
              <h2 className="home__advert__title">Derniere annonce publiée</h2>
              <Link
                to={`adverts/${advert.advert.id}`}
                key={advert.advert.id}
                className="home__advert__container"
              >
                <img className="home__advert__container__img" src={advert.advert.advertImage} alt={advert.id} />
                <h2 className="home__advert__container__title">{advert.advert.title}</h2>
                <div className="home__advert__container__details">
                  <p className="home__advert__container__details__detail">{advert.localisation.city}</p>
                  <p className="home__advert__container__details__detail">{advert.advert.locationPrice} €</p>
                </div>
              </Link>
            </div>
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
        <h1>Loading...</h1>
      )}

    </div>
  );
};

// == Export
export default Home;
