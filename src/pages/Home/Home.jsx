import Map from '../../components/Map/Map';
import './Home.css';

export default function Home() {
  return (
    <div className='home-page'>
      <div className='home-header'>
        <h1>Bienvenido a TennisMap</h1>
        <p>Descubre el mundo del tenis en tiempo real</p>
      </div>
      <div className='map-wrapper'>
        <Map />
      </div>
    </div>
  );
}
