import React from 'react';
import StateItem from './StateItem';

export default function StateList({ states }) {
  return (
    <div className='state-list lists'>
      {states.map(state => 
        <StateItem key={state.name} state={state} />
      )}
    </div>
  );
}
