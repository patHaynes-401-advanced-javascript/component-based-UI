import React from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';
import Character from './character/Character';
import rick from '../data/rick.png';
import beth from '../data/beth.jpg';
import jerry from '../data/jerry.jpg';
import mecese from '../data/mecese.jpg';
import morty from '../data/morty.jpg';
import goomonster from '../data/goomonster.jpg';
import bernie from '../data/bernie.jpg';
import pickles from '../data/pickles.jpg';
import summer from '../data/summer.jpg';
import mrPoopyButthole from '../data/mr_poopy_butthole.jpg';

const App = () => (
  <>
    <Header />
    <Character
      name="Rick"
      species="Human"
      img={rick} />
    <Character
      name="Beth"
      species="Human"
      img={beth} />
    <Character
      name="jerry"
      species="Human"
      img={jerry} />
    <Character
      name="mecese"
      species="mecese"
      img={mecese} />
    <Character
      name="morty"
      species="morty"
      img={morty} />
    <Character
      name="goomonster"
      species="goomonster"
      img={goomonster} />
    <Character
      name="bernie"
      species="bernie"
      img={bernie} />
    <Character
      name="pickles"
      species="pickles"
      img={pickles} />
    <Character
      name="pickles"
      species="goomonster"
      img={goomonster} />
    <Character
      name="summer"
      species="summer"
      img={summer} />
    <Character
      name="Mr Poopy Butthole"
      species="alien"
      img={mrPoopyButthole} />
    <Footer />
  </>
);

export default App;
