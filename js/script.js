const event1 = document.getElementById('event1');
const event2 = document.getElementById('event2');
const event3 = document.getElementById('event3');
const event4 = document.getElementById('event4');
const event5 = document.getElementById('event5');

const container = document.getElementById('container-details');
function addClass(event) {
  event.setAttribute('class', 'event-selected event');
}
function removeClass(event) { //eslint-disable-line
  event.classList.remove('event-selected');
  event.setAttribute('class', 'event');
}
function addEvent(event, content, number) {
  const nextEvent = document.createElement('span');
  nextEvent.setAttribute('class', 'next-event');
  nextEvent.innerHTML = 'Next Event';

  const date = document.createElement('h2');
  date.setAttribute('class', 'date-event');
  date.innerHTML = content[number].hardcoded;

  const tittle = document.createElement('p');
  tittle.setAttribute('class', 'tittle-event');
  tittle.innerHTML = content[number].name.text;

  const place = document.createElement('p');
  place.setAttribute('class', 'place-event');
  place.innerHTML = content[number].venue.name;

  const url = document.createElement('a');
  url.setAttribute('class', 'get-details');
  url.setAttribute('href', content[number].url);
  url.innerHTML = 'Get Event Details';

  const imgBig = document.createElement('img');
  imgBig.setAttribute('alt', 'place of the event');

  switch (number) {
    case 0:
      imgBig.setAttribute('src', 'img/1st-event/bg-event.png');
      break;
    case 1:
      imgBig.setAttribute('src', 'img/2nd-event/bg-event-2.jpg');
      break;
    case 2:
      imgBig.setAttribute('src', 'img/3rd-event/bg-event-3.jpg');
      break;
    case 3:
      imgBig.setAttribute('src', 'img/4th-event/bg-event-4.jpg');
      break;
    case 4:
      imgBig.setAttribute('src', 'img/5th-event/bg-event-5.jpg');
      break;
    default:
      imgBig.setAttribute('src', 'img/1st-event/bg-event.png');
      break;
  }
  container.innerHTML = '';
  container.appendChild(imgBig);
  container.appendChild(nextEvent);
  container.appendChild(date);
  container.appendChild(tittle);
  container.appendChild(place);
  container.appendChild(url);

  const dateEvent = document.createElement('h2');
  dateEvent.setAttribute('class', 'date-event');
  dateEvent.innerHTML = content[number].hardcoded;


  const tittleEvent = document.createElement('p');
  tittleEvent.setAttribute('class', 'tittle-event');
  tittleEvent.innerHTML = content[number].name.text;

  const placeEvent = document.createElement('p');
  placeEvent.setAttribute('class', 'place-event');
  placeEvent.innerHTML = content[number].venue.name;

  const urlEvent = document.createElement('a');
  urlEvent.setAttribute('class', 'get-details');
  urlEvent.setAttribute('href', content[number].url);
  urlEvent.innerHTML = 'Get Event Details';

  event.innerHTML = ''; //eslint-disable-line
  event.appendChild(dateEvent);
  event.appendChild(tittleEvent);
  event.appendChild(placeEvent);
  event.appendChild(urlEvent);
}
/* dataReceived(): Este evento se dispara cuando el request
obtiene sus datos de forma satisfactoria. */
function dataReceived(event) {
  // Obtiene la respuesta.
  const response = event.target.response.events;
  event1.addEventListener('click', function () {
    addEvent(event1, response, 0);
    addClass(event1);
    removeClass(event2);
    removeClass(event3);
    removeClass(event4);
    removeClass(event5);
  });
  event2.addEventListener('click', function () {
    addEvent(event2, response, 1);
    addClass(event2);
    removeClass(event1);
    removeClass(event3);
    removeClass(event4);
    removeClass(event5);
  });

  event3.addEventListener('click', function () {
    addEvent(event3, response, 2);
    addClass(event3);
    removeClass(event2);
    removeClass(event1);
    removeClass(event4);
    removeClass(event5);
  });

  event4.addEventListener('click', function () {
    addEvent(event4, response, 3);
    addClass(event4);
    removeClass(event2);
    removeClass(event3);
    removeClass(event1);
    removeClass(event5);
  });

  event5.addEventListener('click', function () {
    addEvent(event5, response, 4);
    addClass(event5);
    removeClass(event2);
    removeClass(event3);
    removeClass(event4);
    removeClass(event1);
  });
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
