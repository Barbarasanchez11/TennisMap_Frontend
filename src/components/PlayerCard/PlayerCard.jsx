import { useState } from 'react';
import './PlayerCard.css';

export default function PlayerCard({ player }) {
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

  const formatPoints = points => {
    return points.toLocaleString();
  };

  return (
    <div className='player-card'>
      <div className='card-container'>
        <div className='left-section'>
         

          <div className='vertical-surname'>{player.lastName}</div>

          <div className='stats-section'>
            <div className='season-year'>24/25</div>
            <div className='stats-label'>Season Stats</div>
            <div className='stats-grid'>
              <div className='stat-item'>
                <span className='stat-number'>
                  {formatPoints(player.points || 0)}
                </span>
                <span className='stat-label'>PTS</span>
              </div>
              <div className='stat-item'>
                <span className='stat-number'>
                  {getHandText(player.dominantHand)}
                </span>
                <span className='stat-label'>HAND</span>
              </div>
              <div className='stat-item'>
                <span className='stat-number'>
                  {calculateAge(player.dateOfBirth)}
                </span>
                <span className='stat-label'>AGE</span>
              </div>
            </div>
          </div>
        </div>

        <div className='right-section'>
          <div className='main-portrait'>
            <img
              src='https://www.pngarts.com/files/5/Rafael-Nadal-PNG-Download-Image.png'
              alt={`${player.firstName} ${player.lastName}`}
              onError={e => {
                e.target.style.display = 'none';
              }}
            />
          </div>

          <div className='action-shot'>
            <img
              src='/assets/imgbin_f4007ae780548f553c83e37b50283131.png'
              alt={`${player.firstName} ${player.lastName} action`}
              onError={e => {
                e.target.style.display = 'none';
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
