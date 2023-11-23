function agregarEventoAlCalendario() {
  const evento = {
    title: 'Cumple 15 Mia Antebi',
    location: 'Ubicación del Evento',
    description: 'Descripción del Evento',
    start: new Date('2024-04-22T20:00:00'),
    end: new Date('2024-04-23T00:00:00'),
  };

  const startDate = evento.start.toISOString().replace(/-|:|\.\d+/g, '');
  const endDate = evento.end.toISOString().replace(/-|:|\.\d+/g, '');

  const googleCalendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(evento.title)}&dates=${startDate}/${endDate}&details=${encodeURIComponent(evento.description)}&location=${encodeURIComponent(evento.location)}`;

  window.open(googleCalendarUrl, '_blank');
}