import Candy from './Candy';
import './Candies.css';

export default function CandyList(props) {
  return <div className='candy-list'>
    { 
      props.candies.map((candy, i) =>
        <Candy key={`${candy}-${i}`}
          candy={candy}/>)
    }
  </div>;
}
