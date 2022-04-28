import React from 'react';

export default function CarItem({ car: { make, model, mpg: { city, highway }, msrp } }) {
  return (
    <div className='car-item'>
      <h3>{make} {model}</h3>
      <p>City MPG: {city}</p>
      <p>Highway MPG: {highway}</p>
      <p>MSRP: {msrp}</p>
    </div>
  );
}