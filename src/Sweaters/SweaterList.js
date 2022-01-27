import Sweater from './Sweater';
import './Sweaters.css';

export default function SweaterList(props) {
  return <div className='sweaters-list'>
    {
      props.sweaters.map((sweater, i) => 
        <Sweater key={`${sweater.fiber}-${i}`} 
          {...sweater}/>)
    }

  </div>;
}

