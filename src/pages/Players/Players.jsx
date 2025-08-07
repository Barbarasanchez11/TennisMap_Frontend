import PlayerCardExample from '../../components/PlayerCard/PlayerCardExample';
import './Players.css';

export default function Players() {
  return (
    <div className='players-page'>
      <div className='players-header'>
        <h1>Jugadores</h1>
        <p>Descubre los mejores tenistas del mundo</p>
      </div>

      <div className='players-grid'>
        <PlayerCardExample />
      </div>
    </div>
  );
}
