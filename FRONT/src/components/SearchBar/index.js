/* eslint-disable arrow-body-style */
import React from 'react';

// == Import
import './style.scss';

const SearchBar = () => {
  return (
    <div className="SearchBar">
      <form className="SearchBar__form">
        <input className="SarchBar__form__input" placeholder="Recherche" />
        <input className="SearchBar__form__button" type="submit" value="Rechercher" />
      </form>
    </div>
  );
};

export default SearchBar;
