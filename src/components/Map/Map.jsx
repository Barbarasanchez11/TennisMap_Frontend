import { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { tournamentsData } from '../../data/tournamentsData';
import './Map.css';

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN;

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

const createMarkerElement = (statusKey) => {
  const element = document.createElement('div');
  element.className = `tournament-marker status-${statusKey}`;
  return element;
};

const createPopupHTML = (tournament, statusKey) => {
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

    const marker = new mapboxgl.Marker(createMarkerElement(statusKey))
      .setLngLat([tournament.location.lng, tournament.location.lat])
      .setPopup(new mapboxgl.Popup({ offset: 25 }).setHTML(createPopupHTML(tournament, statusKey)))
      .addTo(map);
  });
};

export default function Map() {
  const mapContainer = useRef(null);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-74.006, 40.7128],
      zoom: 2,
    });

    map.addControl(new mapboxgl.NavigationControl());
    addTournamentMarkers(map, tournamentsData);

    return () => map.remove();
  }, []);

  return <div ref={mapContainer} className="map-component" />;
}
