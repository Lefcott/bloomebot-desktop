import React from 'react';

export const getPriceLabel = (price, currency) => (
  <div style={{ display: 'inline' }}>
    <strong style={{ color: '#3B3' }}>{`$${price.toFixed(2)}`}</strong>
    &nbsp;{currency}
  </div>
);
