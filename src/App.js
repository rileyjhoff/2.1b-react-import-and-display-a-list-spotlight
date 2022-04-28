import './App.css';
// import your arrays here
// states -> mario golf -> cars -> nba
import { states } from './data-states.js';
import StateList from './components/StateList';

function App() {
  return (
    <div className="App">
      <StateList states={states} />
    </div>
  );
}

export default App;
