import React from 'react';

import './Content.scss';

export default props => {
  return (
    <div className="Content">
      {props.children}
    </div>
  );
};