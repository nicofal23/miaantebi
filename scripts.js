function agregarEventoAlCalendario() {
    // Crear un objeto de evento con detalles como título, ubicación, fecha y descripción.
    var evento = {
      title: 'Cumple 15 Mia Antebi',
      location: 'Ubicación del Evento',
      description: 'Descripción del Evento',
      start: new Date('2024-04-22T20:00:00'), // Fecha y hora de inicio
      end: new Date('2024-04-23T00:00:00'),   // Fecha y hora de finalización
    };
  
    // Intentar abrir la interfaz de calendario del usuario.
    var success = window.navigator.msSaveOrOpenBlob || (function() {
      var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
      if (isChrome) {
        return true; // Chrome admite la apertura automática del enlace
      }
    })() || function() { // Otros navegadores
      var calEnlace = document.createElement('a');
      calEnlace.href = 'data:text/calendar;charset=utf-8,' + escape(generarArchivoICS(evento));
      calEnlace.target = '_blank';
      calEnlace.download = 'evento.ics';
      document.body.appendChild(calEnlace);
      calEnlace.click();
      document.body.removeChild(calEnlace);
    };
  
    if (!success) {
      // Manejar el caso en el que no se pudo agregar el evento al calendario.
      console.error('No se pudo agregar el evento al calendario.');
    }
  }
  
  function generarArchivoICS(evento) {
    // Generar el contenido del archivo ICS (formato estándar de archivo de calendario).
    return `
  BEGIN:VCALENDAR
  VERSION:2.0
  BEGIN:VEVENT
  SUMMARY:${evento.title}
  LOCATION:${evento.location}
  DESCRIPTION:${evento.description}
  DTSTART:${evento.start.toISOString().replace(/-|:|\.\d+/g, '')}
  DTEND:${evento.end.toISOString().replace(/-|:|\.\d+/g, '')}
  END:VEVENT
  END:VCALENDAR
    `;
  }
  