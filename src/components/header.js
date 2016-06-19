import React from 'react';

import Button from './button';

export default () => {
  return (
    <header>
      <div className="nav">
        <Button title="CV" url="//drive.google.com/file/d/0B6imXc7m6sp6RGwzY1FudXJjXzg/view?usp=sharing" />
        <Button title="Contact me" url="#Get-In-Touch" />
      </div>
    </header>
  )
}
