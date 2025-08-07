import { useState } from 'react';
import './PlayerCard.css';

export default function PlayerCard({ player }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const calculateAge = dateOfBirth => {
    const today = new Date();
    const birthDate = new Date(dateOfBirth);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }
    return age;
  };

  const getHandText = hand => {
    return hand === 'left' ? 'IZQ' : hand === 'ambidextrous' ? 'AMB' : 'DER';
  };

  const getGenderText = gender => {
    return gender === 'male' ? 'M' : 'F';
  };

  const formatPoints = points => {
    return points.toLocaleString();
  };

  return (
    <div className={`player-card ${isExpanded ? 'expanded' : ''}`}>
      <div className='card-front'>
        <div className='card-background'>
          <div className='card-overlay'></div>
        </div>

        <div className='player-image-container'>
          <img
            src={player.imageUrl}
            alt={`${player.firstName} ${player.lastName}`}
            onError={e => {
              e.target.src =
                'https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2025/06/04/17490726687850.jpg';
            }}
          />
          <div className='player-status'>
            {player.isActive ? (
              <span className='status-active'>●</span>
            ) : (
              <span className='status-inactive'>○</span>
            )}
          </div>
        </div>

        <div className='ranking-badge'>#{player.ranking || 'N/A'}</div>

        <div className='player-name-badge'>
          {player.firstName} {player.lastName}
        </div>

        <div className='tennis-label'>TENNIS</div>

        <div
          className='card-details-toggle'
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <span className='toggle-icon'>▼</span>
        </div>
      </div>

      {isExpanded && (
        <div className='card-back'>
          <div className='back-content'>
            <div className='player-info-section'>
              <div className='info-item'>
                <span className='info-label'>Name:</span>
                <span className='info-value'>
                  {player.firstName} {player.lastName}
                </span>
              </div>
              <div className='info-item'>
                <span className='info-label'>Age:</span>
                <span className='info-value'>
                  {calculateAge(player.dateOfBirth)}
                </span>
              </div>
              <div className='info-item'>
                <span className='info-label'>Height:</span>
                <span className='info-value'>{player.height}cm</span>
              </div>
              <div className='info-item'>
                <span className='info-label'>Position:</span>
                <span className='info-value'>Singles Player</span>
              </div>
              <div className='info-item'>
                <span className='info-label'>Hand:</span>
                <span className='info-value'>
                  {getHandText(player.dominantHand)}
                </span>
              </div>
              <div className='info-item'>
                <span className='info-label'>Points:</span>
                <span className='info-value'>
                  {formatPoints(player.points || 0)}
                </span>
              </div>
            </div>

            <div className='player-bio'>
              {player.firstName} {player.lastName}, the '{player.nationality}{' '}
              Champion', excels with{' '}
              {player.dominantHand === 'left' ? 'left-handed' : 'right-handed'}{' '}
              precision and strategic play. Their ranking of #{player.ranking}{' '}
              and {formatPoints(player.points || 0)} points showcase their
              dominance on the court.
            </div>

            {(player.socialMedia?.twitter || player.socialMedia?.instagram) && (
              <div className='social-links'>
                {player.socialMedia?.twitter && (
                  <a
                    href={player.socialMedia.twitter}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <span className='social-icon'>🐦</span>
                  </a>
                )}
                {player.socialMedia?.instagram && (
                  <a
                    href={player.socialMedia.instagram}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <span className='social-icon'>📷</span>
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
