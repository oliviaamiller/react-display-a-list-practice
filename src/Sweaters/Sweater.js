import './Sweaters.css';

export default function Sweater({ name, fiber, style, timesWorn }) {
  return <div className='sweater'>
    <p className='sweater-name'>{name}</p>
    <p>fiber: {fiber}</p>
    <p>style: {style}</p>
    <p>times worn: {timesWorn}</p>
  </div>;
}


