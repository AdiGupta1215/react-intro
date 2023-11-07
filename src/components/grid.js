import React, { useState } from 'react';
import ColorBox from './colorbox.js'; 

const Grid = () => {
  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(9, 100px)',
    gridTemplateRows: 'repeat(9,100px)'
  };

  return (
    <div style={gridStyle}>
      {[...Array(81)].map((_, index) => (
        <ColorBox key={index} />
      ))}
    </div>
  );
};

export default Grid;

