import Sweater from './Sweater';

export default function SweaterList(props) {
  return <div className='sweater-list'>
    {
      props.sweaters.map((sweater, i) => 
        <Sweater key={`${sweater.fiber}-${i}`} 
          {...sweater}/>)
    }

  </div>;
}

