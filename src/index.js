import './style.css';
import './imgs/logomenu.jpeg';
import getShows from './modules/getShows.js';
import ShowLibrary from './modules/ShowLibrary.js';


const showContainer = document.getElementById('showList');
const result = getShows();
result.then((value) => {
  const showLib = new ShowLibrary(value.data);
  showLib.displayShows(6, showContainer);
});