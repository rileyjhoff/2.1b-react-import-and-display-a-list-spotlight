import React from 'react';

export default function CarItem({ car: { make, model, mpg: { city, highway }, msrp } }) {
  return (
    <div className='car-item cards'>
      <h3>{make} {model}</h3>
      <p>MSRP: {msrp}</p>
      <p>Highway MPG: {highway}</p>
      <p>City MPG: {city}</p>
    </div>
  );
}