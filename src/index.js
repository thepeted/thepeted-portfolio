require('./styles/main.sass') // root stylesheeet - .css, .scss or .sass

import React from 'react';
import ReactDOM from 'react-dom';

import App from './containers/app';

ReactDOM.render(<App />, document.querySelector('.container'));
