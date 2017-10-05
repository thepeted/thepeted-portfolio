import React, {Component} from 'react';
import Social from '../components/fa-icon';

import data from '../data/social-data';

import { MIN_HEIGHT } from '../constants/constants';

const Outro = ({ height }) => (
  <div 
  className="content outro" 
  id="Get-In-Touch" 
  style={window.innerWidth >= 600 ? { height, minHeight: MIN_HEIGHT } : {}}
  >
    <div>
      <h2>Thanks for stopping by. Keep in touch!</h2>
      <div className="social">
        {
          data.map((social, i) => {
            return (
              <Social
                faClass={social.faClass}
                link={social.link}
                key={i}
                />
            );
          })
        }
      </div>
    </div>
    <footer>View the source on <a href="https://github.com/thepeted/thepeted-portfolio">Github</a></footer>    
  </div>
);

export default Outro;
