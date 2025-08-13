import { useEffect, useRef, useState } from 'react';
import { initMapWithLoader } from '../../utils/mapUtils';
import { getTournamentStatus, getStatusLabel } from '../../utils/tournamentHelpers';
import './Map.css';

const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

export default function Map() {
  const mapRef = useRef(null);
  const [selectedTournament, setSelectedTournament] = useState(null);

  useEffect(() => {
    if (!GOOGLE_MAPS_API_KEY) {
      console.error('Google Maps API key not configured');
      return;
    }

    initMapWithLoader(mapRef.current, setSelectedTournament)
      .catch(error => {
        console.error('Failed to initialize map:', error);
      });
  }, []);

  if (!GOOGLE_MAPS_API_KEY) {
    return <div className="map-component">API key not configured</div>;
  }

  return (
    <div className="map-component">
      <div ref={mapRef} style={{ width: '100%', height: '100%' }} />
      
      {selectedTournament && (
        <div className="tournament-info-window">
          <button className="info-window-close" onClick={() => setSelectedTournament(null)}>×</button>
          <div className="tournament-popup">
            <h3 className="tournament-name">{selectedTournament.name}</h3>
            <p className="tournament-date">
              Inicio: {new Date(selectedTournament.startDate).toLocaleDateString('es-ES')}
            </p>
            <p className="tournament-date">
              Fin: {new Date(selectedTournament.endDate).toLocaleDateString('es-ES')}
            </p>
            <p className="tournament-status">
              Estado: 
              <span className={`status-text status-${getTournamentStatus(selectedTournament.startDate, selectedTournament.endDate)}`}>
                {getStatusLabel(getTournamentStatus(selectedTournament.startDate, selectedTournament.endDate))}
              </span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
