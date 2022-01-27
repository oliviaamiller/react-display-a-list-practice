import './App.css';
import { candies } from './Candies/candies-data';
import CandyList from './Candies/CandyList';
// import your arrays here

function App() {
  return (
    <div className="App">
        Render all your lists here. Pass the arrays as props.
      <CandyList candies={candies}/>
    </div>
  );
}

export default App;
