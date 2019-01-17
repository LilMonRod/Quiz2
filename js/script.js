// dataReceived(): Este evento se dispara cuando el request
// obtiene sus datos de forma satisfactoria.
function dataReceived(event) {
  console.log(event.target);
  // Obtiene la respuesta.
  const response = event.target.response.events;
  console.log(response);
}
function getElements() {
  // Crea un nuevo XMLHttpRequest.
  const request = new XMLHttpRequest();
  // Agrega un event listener para el evento 'load'.
  request.addEventListener('load', dataReceived);
  // Define el tipo de respuesta esperada como 'json'.
  request.responseType = 'json';
  // Inicializa el request.
  request.open('GET', '/event-api.json');
  // Envía el request.
  request.send();
}
getElements();
