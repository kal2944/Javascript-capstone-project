import './style.css';
import './imgs/logomenu.jpeg';
import './imgs/closexbutton.png';
import getShows from './modules/getShows.js';
import ShowLibrary from './modules/ShowLibrary.js';
import popupadd from './modules/popupadd.js';
import getid from './modules/getid.js';

const showContainer = document.getElementById('showList');

showContainer.addEventListener('click', popupadd);
getShows().then((result) => {
  const showLib = new ShowLibrary(result);
  showLib.displayShows(6, showContainer);
});



