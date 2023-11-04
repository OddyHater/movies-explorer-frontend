import React from 'react';

import './section-title.css'

const SectionTitle = ({ modifier, content }) => {
  return (
    <h2 className={`${modifier}__undertitle section-title`}>{ content }</h2>
  );
};

export default SectionTitle;