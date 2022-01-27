import './App.css';
import { candies } from './Candies/candies-data';
import CandyList from './Candies/CandyList';
import { sweaters } from './Sweaters/sweater-data';
import SweaterList from './Sweaters/SweaterList';
// import your arrays here

function App() {
  return (
    <div className="App">
        Render all your lists here. Pass the arrays as props.
      <CandyList candies={candies}/>
      <SweaterList sweaters={sweaters}/>
    </div>
  );
}

export default App;
