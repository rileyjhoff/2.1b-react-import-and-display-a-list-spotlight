import React from 'react';

export default function MarioGolfItem({ character: { name, power, control, spin, special } }) {
  return (
    <div className='mario-golf-item cards'>
      <h3>{name}</h3>
      <p>Power: {power}</p>
      <p>Control: {control}</p>
      <p>Spin: {spin}</p>
      <p>Special: {special}</p>
    </div>
  );
}
