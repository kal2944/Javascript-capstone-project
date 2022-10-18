import './style.css';
import './imgs/logomenu.jpeg';
import getShows from './modules/getShows.js';
import ShowLibrary from './modules/ShowLibrary.js';

const showContainer = document.getElementById('showList');

getShows().then((result) => {
  const showLib = new ShowLibrary(result);
  showLib.displayShows(6, showContainer);
});
