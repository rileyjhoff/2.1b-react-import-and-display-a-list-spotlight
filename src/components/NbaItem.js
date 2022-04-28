import React from 'react';

export default function NbaItem({ team: { team: { city, name }, starters, coach, arena, championships } }) {
  return (
    <div className='nba-item cards'>
      <h3>{city} {name}</h3>
      <p>Coach: {coach}</p>
      <p>Home Arena: {arena}</p>
      <div className='starting-lineup'>
        <h4>Starting Lineup:</h4>
        {starters.map(starter => 
          <p className='starter' key={starter.name}>{starter.name} | {starter.position} | {starter.age}</p>
        )}
      </div>
      <div className='championships'>
        <h4>Championships:</h4>
        <p className='championship-years'>
          {championships.map(championship => 
            championship + ' '
          )}
        </p>
      </div>
    </div>
  );
}
