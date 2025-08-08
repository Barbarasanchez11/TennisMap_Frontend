import PlayerCard from './PlayerCard';
import './PlayerCardComparison.css';

const samplePlayer = {
  firstName: 'Rafael',
  lastName: 'Nadal',
  nationality: 'España',
  dateOfBirth: '1986-06-03',
  ranking: 1,
  points: 12345,
  dominantHand: 'left',
  gender: 'male',
  isActive: true,
  height: 185,
  weight: 85,
  imageUrl: 'https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2025/06/04/17490726687850.jpg',
  socialMedia: {
    twitter: 'https://twitter.com/RafaelNadal',
    instagram: 'https://instagram.com/rafaelnadal',
  },
};

export default function PlayerCardComparison() {
  return (
    <div className="card-comparison">
      <div className="cards-container">
        <div className="card-option">
          <div className="player-card wimbledon-theme">
            <PlayerCard player={samplePlayer} />
          </div>
        </div>

        <div className="card-option">
          <div className="player-card clay-theme">
            <PlayerCard player={samplePlayer} />
          </div>
        </div>
      </div>
    </div>
  );
}
