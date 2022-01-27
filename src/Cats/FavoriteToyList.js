// import FavoriteToy from './FavoriteToy';

export default function FavoriteToyList(props) {
  return <div className='favorite-toy-list'>
    <p>favorite toy: {props.favoriteToy.type}</p>
    <p>toy has catnip? {props.favoriteToy.hasCatNip}</p>
  </div>;
}
