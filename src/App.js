import './App.css';
// import your arrays here
// states -> mario golf -> cars -> nba
import { states } from './data-states';
import { marioGolf } from './data-mario-golf';
import { cars } from './data-cars';
import { NBA } from './data-nba';
import StateList from './components/StateList';
import MarioGolfList from './components/MarioGolfList';
import CarList from './components/CarList';
import NbaList from './components/NbaList';

function App() {
  return (
    <div className="App">
      <StateList states={states} />
      <MarioGolfList characters={marioGolf} />
      <CarList cars={cars} />
      <NbaList teams={NBA} />
    </div>
  );
}

export default App;
