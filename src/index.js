import './style.css';
import './imgs/logomenu.jpeg';
import './imgs/closexbutton.png';
import './imgs/cali.jpg';
import getShows from './modules/getShows.js';
import ShowLibrary from './modules/ShowLibrary.js';

const showContainer = document.getElementById('showList');
const pruebapop = document.getElementById('prueba');
const popupinfo = document.getElementById('popupinfo');

getShows().then((result) => {
  const showLib = new ShowLibrary(result);
  showLib.displayShows(6, showContainer);
});

pruebapop.addEventListener('click', () => {
  popupinfo.classList.display = 'flex';
  alert('i press it');
});