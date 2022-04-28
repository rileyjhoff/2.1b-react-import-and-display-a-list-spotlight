import React from 'react';

export default function MarioGolfItem({ character: { name, power, control, spin, special } }) {
  return (
    <div className='mario-item cards'>
      <h3>{name}</h3>
      <p className='special'>Special: {special}</p>
      <p>Power: {power}</p>
      <p>Control: {control}</p>
      <p>Spin: {spin}</p>
    </div>
  );
}
