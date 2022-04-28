import React from 'react';

export default function StateItem({ state: { name, capital, population, admitted } }) {
  return (
    <div className='state-item cards'>
      <h3>{name}</h3>
      <p>Admitted in {admitted}</p>
      <p>Population: {population}</p>
      <p>Capital: {capital}</p>
    </div>
  );
}
