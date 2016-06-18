import React from 'react';

export default ({title, url}) => (
  <span className="button">
     <a href={url}>{title}</a>
  </span>
)
