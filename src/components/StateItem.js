import React from 'react';

export default function StateItem({ state: { name, capital, population, admitted } }) {
  return (
    <div className='state-item cards'>
      <h3>{name}</h3>
      <p>Capital: {capital}</p>
      <p>Population: {population}</p>
      <p>Admitted in {admitted}</p>
    </div>
  );
}
