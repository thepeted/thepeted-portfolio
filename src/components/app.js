import React from 'react';

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
    </div>
  )
};
