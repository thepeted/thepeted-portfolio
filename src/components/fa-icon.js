import React from 'react';

export default ({faClass, link}) => {
  return (
    <a href={link} target="_blank"><i className={`fa ${faClass} fa-3x`}></i></a>
  )
}
