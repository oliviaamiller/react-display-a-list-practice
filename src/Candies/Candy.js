import './Candies.css';

export default function Candy(props) {
  return <div className='candy'>
    <div>{props.candy}</div>
  </div>;
}

