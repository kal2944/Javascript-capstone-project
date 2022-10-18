import './style.css';
import './imgs/logomenu.jpeg';
import getShows from './modules/getShows.js';
import ShowLibrary from './modules/ShowLibrary.js';

const showContainer = document.getElementById('showList');

getShows().then((a) => {
  const showLib = new ShowLibrary(a);
  showLib.displayShows(106, showContainer);
});
