import React from 'react';

import classNames from 'classnames'
import scrollToElement from 'scroll-to-element'

import { SCROLL_SPEED } from '../constants/constants'

export default ({ showHomeButton }) => {
  const homeButtonClassNames = classNames('button', 'home-link', { hidden: !showHomeButton })  
  return (
    <header>
      <div className='nav'>
        <span 
          className={homeButtonClassNames}
          onClick={() => scrollToElement('.container', { duration: SCROLL_SPEED })}
          >
          <i className="fa fa-lg fa-home" aria-hidden="true"></i>
        </span>
        <div>
          <span className="button">
            <a href='//drive.google.com/file/d/0B6imXc7m6sp6RWlHU0J0WkZCVWs/view?usp=sharing'>CV</a>
          </span>
          <span 
            className='button' 
            onClick={()=> scrollToElement('#Get-In-Touch', { duration: SCROLL_SPEED })}
            >
            Contact Me
          </span>
        </div>
      </div>
    </header>
  )
}
