// == Import npm
import React from 'react';

// == Import
import './style.scss';

// == Composant
const AboutUs = () => (
  <div className="AboutUs">
    <h1 className="AboutUs__title--main">A propos de nous</h1>
    <h2 className="AboutUs__title--description">Le projet, c'était quoi ?</h2>
    <p className="AboutUs__description">Nous sommes cinq étudiants fraîchement sortis de l'école O'clock , Promo Nautilus (Ooh-Aaah !) Oct. 2020 - Mars 2021. 
                                        Il nous a été demandé, à l'issue de la formation, de proposer des idées de projet à réaliser. Parmi de nombreuses propositions, Mathis, notre Product Owner a donc soumis son idée, et aujourd'hui nous présentons fièrement ce qu'est devenu O'boardgame. Tous un peu geek, chacun d'entre nous a choisi de participer à cette aventure et il nous a tous beaucoup tenu à cœur de mettre nos compétences tout juste acquises au service de la réalisation de ce projet. Arrivé en bout de course, le travail accompli en 4 semaines et après 5 mois d'études a été rude, mais le dynamisme du groupe et la qualité de l'enseignement nous ont permis de réussir à fournir un site opérationnel. Cela nous aura permis également de nous rendre compte des choses folles que nous sommes tous capables d'accomplir, malgré nos parcours bien différents. Merci à tous de nous avoir lu, en espérant que notre site vous incite à jouer tous ensemble .</p>
    <p className="AboutUs__description--sign">O'clockement votre , l'équipe O'boardgame .</p>
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
        <p className="AboutUs__crew__card__name">Killian "Raiponse" Courvoisier</p>
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
