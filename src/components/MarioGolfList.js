import React from 'react';
import MarioGolfItem from './MarioGolfItem';

export default function MarioGolfList({ characters }) {
  return (
    <div className='mario-list lists'>
      {characters.map(character =>
        <MarioGolfItem key={character.name} character={character} />
      )}
    </div>
  );
}
