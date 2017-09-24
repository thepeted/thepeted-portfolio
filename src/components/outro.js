import React, {Component} from 'react';
import Social from '../components/fa-icon';

import data from '../data/social-data';

import {FOOTER_HEIGHT} from '../constants/constants';

const Outro = ({ height }) => (
  <div 
  className="content outro" 
  id="Get-In-Touch" 
  style={{height: height - FOOTER_HEIGHT }}
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
  </div>
);

export default Outro;
