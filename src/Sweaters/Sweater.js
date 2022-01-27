export default function Sweater({ fiber, style, timesWorn }) {
  return <div className='sweater'>
    <p>fiber: {fiber}</p>
    <p>style: {style}</p>
    <p>times worn: {timesWorn}</p>
  </div>;
}

