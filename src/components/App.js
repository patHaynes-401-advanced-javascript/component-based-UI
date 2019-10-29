import React from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';
import Character from './character/Character';
import rick from '../data/rick.png';

const App = () => (
  <>
    <Header />
    <Character
      name="Rick"
      species="Human"
      img={rick} />
    <Footer />
  </>
);

export default App;
