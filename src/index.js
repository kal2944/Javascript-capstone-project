import './style.css';
import './imgs/logomenu.jpeg';
import './imgs/closexbutton.png';
import getShows from './modules/getShows.js';
import ShowLibrary from './modules/ShowLibrary.js';
import popupadd from './modules/popupadd.js';
import idpost from './modules/like.js';


const showContainer = document.getElementById('showList');


showContainer.addEventListener('click', popupadd);

getShows().then((result) => {
  const showLib = new ShowLibrary(result);
  showLib.displayShows(6);
 const likebutton = document.querySelectorAll('.likebtn');
  likebutton.forEach((item)=>{
    item.addEventListener('click',()=>{
      const idcard = parseInt(item.getAttribute('id'));
      idpost(idcard); 
    });
  }); 
});


