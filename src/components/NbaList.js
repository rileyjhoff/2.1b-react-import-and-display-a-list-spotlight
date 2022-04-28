import React from 'react';
import NbaItem from './NbaItem';

export default function NbaList({ teams }) {
  return (
    <div className='nba-list'>
      {teams.map(team => 
        <NbaItem key={team.team} team={team} />
      )}
    </div>
  );
}