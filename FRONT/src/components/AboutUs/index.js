// == Import npm
import React from 'react';

// == Import
import './style.scss';

// == Composant
const AboutUs = () => (
  <div className="AboutUs">
    <h1 className="AboutUs__title--main">A propos de nous</h1>
    <h2 className="AboutUs__title--description">Description du projet</h2>
    <p className="AboutUs__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque dolore nihil repudiandae fuga. Quae magni harum ipsum officiis! Expedita molestiae dolorum minima ab velit sit autem. Atque culpa veniam suscipit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque dolore nihil repudiandae fuga. Quae magni harum ipsum officiis! Expedita molestiae dolorum minima ab velit sit autem. Atque culpa veniam suscipit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque dolore nihil repudiandae fuga. Quae magni harum ipsum officiis! Expedita molestiae dolorum minima ab velit sit autem. Atque culpa veniam suscipit.</p>
    <div className="AboutUs__crew">
      <div className="AboutUs__crew__card">
        <img className="AboutUs__crew__card__img" src="https://avatars.githubusercontent.com/u/63245581?s=400&u=34042793b3aad7c6bc18ce0c8849994f8bcf709d&v=4" alt="Mathis" />
        <p className="AboutUs__crew__card__name">Mathis Pati</p>
        <p className="AboutUs__crew__card__description">Développeur Back, Product Owner</p>
      </div>
      <div className="AboutUs__crew__card">
        <img className="AboutUs__crew__card__img" src="https://avatars.githubusercontent.com/u/71637686?s=400&u=86a3ba95d0bcd610f386d2fa8f21650b4c7852c2&v=4" alt="Cédric" />
        <p className="AboutUs__crew__card__name">Cédric Leizour</p>
        <p className="AboutUs__crew__card__description">Développeur Front, Scrum Master</p>
      </div>
      <div className="AboutUs__crew__card">
        <img className="AboutUs__crew__card__img" src="https://avatars.githubusercontent.com/u/71666967?s=400&v=4" alt="Kaio" />
        <p className="AboutUs__crew__card__name">Kaio Fernandes Dias Cordeiro </p>
        <p className="AboutUs__crew__card__description">Développeur Front, Git Master</p>
      </div>
      <div className="AboutUs__crew__card">
        <img className="AboutUs__crew__card__img" src="https://avatars.githubusercontent.com/u/71069962?s=400&v=4" alt="killian" />
        <p className="AboutUs__crew__card__name">Killian Courvoisier</p>
        <p className="AboutUs__crew__card__description">Développeur Back, Lead Dev Back</p>
      </div>
      <div className="AboutUs__crew__card">
        <img className="AboutUs__crew__card__img" src="https://avatars.githubusercontent.com/u/59771661?s=460&u=01b6546c3a83d639765278fedac0a45366b6bb26&v=4" alt="Osée" />
        <p className="AboutUs__crew__card__name">Osée Ralantoarison</p>
        <p className="AboutUs__crew__card__description">Développeur Front, Lead Dev Front</p>
      </div>
    </div>
  </div>
);

// == Export
export default AboutUs;
