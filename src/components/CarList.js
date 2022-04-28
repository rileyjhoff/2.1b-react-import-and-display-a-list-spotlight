import React from 'react';
import CarItem from './CarItem';

export default function CarList({ cars }) {
  return (
    <div className='car-list'>
      {cars.map(car =>
        <CarItem key={car.make} car={car} />
      )}
    </div>
  );
}