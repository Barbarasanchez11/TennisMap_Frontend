import PlayerCard from './PlayerCard';

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
  imageUrl:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Rafael_Nadal_holding_the_2008_Rogers_Cup_trophy2.jpg/250px-Rafael_Nadal_holding_the_2008_Rogers_Cup_trophy2.jpg',
  socialMedia: {
    twitter: 'https://twitter.com/RafaelNadal',
    instagram: 'https://instagram.com/rafaelnadal',
  },
};

export default function PlayerCardExample() {
  return (
    <div style={{ padding: '20px', maxWidth: '400px' }}>
      <PlayerCard player={samplePlayer} />
    </div>
  );
}
