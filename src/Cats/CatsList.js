import Cat from './Cat';

export default function CatsList(props) {
  return <div className='cats-list'>
    {
      props.cats.map((cat, i) =>
        <Cat key={`${cat.name}-${i}`}
          {...cat} />)
    }
  </div>;
}
