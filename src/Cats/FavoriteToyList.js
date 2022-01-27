import FavoriteToy from './FavoriteToy';

export default function FavoriteToyList({ favoriteToy }) {
  return <div className='favorite-toy-list'>
    { favoriteToy.map((toy, i) =>
      <FavoriteToy key={`${toy.type}-${i}`}
        {...toy} />) }
  </div>;
}
