import React from 'react';

import Footer from './footer';
import Header from './header';
import Intro from '../containers/intro';
import Outro from '../containers/outro';
import Showcase from '../containers/showcase';


export default () => {
  return (
    <div>
      <Header />
      <Intro />
      <Showcase />
      <Outro />
      <Footer />
    </div>
  )
};
