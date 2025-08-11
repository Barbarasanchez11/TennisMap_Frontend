import { useEffect, useRef } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import { tournamentsData } from '../../data/tournamentsData';
import './Map.css';

const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

const getTournamentStatus = (startDate, endDate) => {
  const today = new Date();
  const start = new Date(startDate);
  const end = new Date(endDate);

  if (today >= start && today <= end) return 'ongoing';
  if (today < start) return 'upcoming';
  return 'finished';
};

const getStatusLabel = (statusKey) => {
  const labels = {
    ongoing: 'En curso',
    finished: 'Finalizado',
    upcoming: 'Próximo'
  };
  return labels[statusKey] || 'Desconocido';
};

const createInfoWindowContent = (tournament, statusKey) => {
  const label = getStatusLabel(statusKey);
  return `
    <div class="tournament-popup">
      <h3 class="tournament-name">${tournament.name}</h3>
      <p class="tournament-date">Inicio: ${new Date(tournament.startDate).toLocaleDateString('es-ES')}</p>
      <p class="tournament-date">Fin: ${new Date(tournament.endDate).toLocaleDateString('es-ES')}</p>
      <p class="tournament-status">
        Estado: 
        <span class="status-text status-${statusKey}">${label}</span>
      </p>
    </div>
  `;
};

const addTournamentMarkers = (map, tournaments) => {
  tournaments.forEach((tournament) => {
    const statusKey = getTournamentStatus(tournament.startDate, tournament.endDate);
    
    const marker = new google.maps.Marker({
      position: { lat: tournament.location.lat, lng: tournament.location.lng },
      map: map,
      title: tournament.name,
      icon: {
        path: google.maps.SymbolPath.CIRCLE,
        scale: 8,
        fillColor: statusKey === 'ongoing' ? '#00ff00' : 
                   statusKey === 'finished' ? '#ff0000' : '#0000ff',
        fillOpacity: 1,
        strokeColor: '#ffffff',
        strokeWeight: 2
      }
    });

    const infoWindow = new google.maps.InfoWindow({
      content: createInfoWindowContent(tournament, statusKey)
    });

    marker.addListener('click', () => {
      infoWindow.open(map, marker);
    });
  });
};

export default function Map() {
  const mapContainer = useRef(null);

  useEffect(() => {
    const loader = new Loader({
      apiKey: GOOGLE_MAPS_API_KEY,
      version: 'weekly',
      libraries: ['places']
    });

    loader.load().then(() => {
      const map = new google.maps.Map(mapContainer.current, {
        center: { lat: 0, lng: 0 },
        zoom: 2,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: true,
        zoomControl: true
      });

      addTournamentMarkers(map, tournamentsData);
    }).catch((error) => {
      console.error('Error loading Google Maps:', error);
    });

    return () => {
      // Cleanup if needed
    };
  }, []);

  return <div ref={mapContainer} className="map-component" />;
}
