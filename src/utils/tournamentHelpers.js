export const getTournamentStatus = (startDate, endDate) => {
  const today = new Date();
  const start = new Date(startDate);
  const end = new Date(endDate);

  if (today >= start && today <= end) return 'ongoing';
  if (today < start) return 'upcoming';
  return 'finished';
};

export const getStatusLabel = (statusKey) => {
  const labels = {
    ongoing: 'En curso',
    finished: 'Finalizado',
    upcoming: 'Próximo'
  };
  return labels[statusKey] || 'Desconocido';
}; 