import './App.css';
// import your arrays here
// states -> mario golf -> cars -> nba
import { states } from './data-states.js';
import { marioGolf } from './data-mario-golf';
import StateList from './components/StateList';
import MarioGolfList from './components/MarioGolfList';

function App() {
  return (
    <div className="App">
      <StateList states={states} />
      <MarioGolfList characters={marioGolf} />
    </div>
  );
}

export default App;
