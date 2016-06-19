import React from 'react';

export default ({content}) => {
  function createMarkup() { return {__html: content} };
  return (
    <div className="description">
      <p dangerouslySetInnerHTML={createMarkup()} />
    </div>
  );
}
