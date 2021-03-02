// == Import npm
import React from 'react';

// == Import
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import Home from 'src/components/Home';
import './styles.scss';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    <Home />
    <Footer />
  </div>
);

// == Export
export default App;
