import React from 'react';

export default ({hash, height}) => {
  return (
    <div className="codepen">
      <iframe
        id="cp_embed_aNrdzP"
        src={`//codepen.io/thepeted/embed/${hash}?height=${height}&amp;theme-id=dark&amp;slug-hash=aNrdzP&amp;default-tab=result&amp;user=thepeted&amp;embed-version=2`}
        scrolling="no"
        frameborder="0"
        height={height}
        allowtransparency="true"
        allowfullscreen="true"
        name="CodePen Embed"
        title="CodePen Embed"
        class="cp_embed_iframe"
        style={{width: '100%', overflow: 'hidden'}}></iframe>
    </div>
  )
};
