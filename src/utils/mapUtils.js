import { Loader } from '@googlemaps/js-api-loader';
import { tournamentsData } from '../data/tournamentsData';
import { getTournamentStatus } from './tournamentHelpers';

export const initMapWithLoader = async (mapElement, onTournamentSelect) => {
  const loader = new Loader({
    apiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    version: 'weekly',
    libraries: ['places']
  });

  try {
    await loader.load();
    
    const map = new google.maps.Map(mapElement, {
      center: { lat: 0, lng: 0 },
      zoom: 2,
      mapTypeControl: false,
      streetViewControl: false,
      fullscreenControl: true,
      zoomControl: true
    });

    tournamentsData.forEach(tournament => {
      const status = getTournamentStatus(tournament.startDate, tournament.endDate);
      
      const marker = new google.maps.Marker({
        position: { lat: tournament.location.lat, lng: tournament.location.lng },
        map: map,
        title: tournament.name,
        icon: {
          path: google.maps.SymbolPath.CIRCLE,
          scale: 8,
          fillColor: status === 'ongoing' ? '#00ff00' : 
                     status === 'finished' ? '#ff0000' : '#0000ff',
          fillOpacity: 1,
          strokeColor: '#ffffff',
          strokeWeight: 2
        }
      });

      const infoWindow = new google.maps.InfoWindow({
        content: createInfoWindowContent(tournament, status)
      });

      marker.addListener('click', () => {
        infoWindow.open(map, marker);
        onTournamentSelect(tournament);
      });

      map.addListener('click', () => {
        infoWindow.close();
      });
    });

    return map;
  } catch (error) {
    console.error('Error loading Google Maps:', error);
    throw error;
  }
};

const createInfoWindowContent = (tournament, status) => {
  const statusLabels = {
    ongoing: 'En curso',
    finished: 'Finalizado',
    upcoming: 'Próximo'
  };

  const label = statusLabels[status] || 'Desconocido';
  
  return `
    <div class="tournament-popup">
      <h3 class="tournament-name">${tournament.name}</h3>
      <p class="tournament-date">Inicio: ${new Date(tournament.startDate).toLocaleDateString('es-ES')}</p>
      <p class="tournament-date">Fin: ${new Date(tournament.endDate).toLocaleDateString('es-ES')}</p>
      <p class="tournament-status">
        Estado: 
        <span class="status-text status-${status}">${label}</span>
      </p>
    </div>
  `;
}; 