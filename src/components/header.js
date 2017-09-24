import React from 'react';

import scrollToElement from 'scroll-to-element'

export default () => {
  return (
    <header>
      <div className="nav">
        <span className="button">
          <a href='//drive.google.com/file/d/0B6imXc7m6sp6RGwzY1FudXJjXzg/view?usp=sharing'>CV</a>
        </span>
        <span className='button' onClick={()=> scrollToElement('#Get-In-Touch', { duration: 300 })}>
          Contact Me
        </span>
      </div>
    </header>
  )
}
