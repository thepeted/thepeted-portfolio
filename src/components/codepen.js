import React from 'react';

export default ({hash, height}) => {
  return (
    <div className="codepen">
      <iframe
        id={`cp_embed_${hash}`}
        src={`//codepen.io/thepeted/embed/${hash}?height=${height}&amp;theme-id=24278&amp;slug-hash=${hash}&amp;default-tab=result&amp;user=thepeted&amp;embed-version=2`}
        scrolling="no"
        frameBorder="0"
        height={height}
        allowTransparency="true"
        allowFullScreen="true"
        name="CodePen Embed"
        title="CodePen Embed"
        className="cp_embed_iframe"
        style={{width: '100%', overflow: 'hidden'}}></iframe>
    </div>
  )
};
