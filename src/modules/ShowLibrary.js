export default class ShowLibrary {
  constructor(Array) {
    this.ShowArray = Array;
  }

  displayShows(numberOfItems, showContainer) {
    for (let i = 0; i < numberOfItems; i += 1) {
      const show = this.ShowArray[i];
      const htmlString = `
        <li class="show" id="${show.id}">
          <img src="${show.image.original}" alt="" class="showImage">
        <div class="tittleimg">
          <div><h2 class="showTitle">${show.name}</h2></div>
          <div class='stylelikes'>
          <div>
          <i class="fa-regular fa-heart"></i>
            <i class="fa-solid fa-heart" style='display:none;'></i>
          </div>
           <div>
           <span class="likeCount">1 like</span>
           </div>
          </div>
        </div>
          <div class="genres">
          ${show.genres.join(' ')}
          </div>
              <div>
                <button type="button">comments</button>
              </div>
              <div>
                <button type="button">Reservations</button>
              </div>
        </li>`;
      showContainer.insertAdjacentHTML('beforeend', htmlString);
    }
  }

/*  popup(numberOfItems, showContainer) {
    for (let i = 0; i < numberOfItems; i += 1) {
      const show = this.ShowArray[i];
      const htmlString = `
          <li class="showpopup" id="${show.id}">
            <img src="${show.image.original}" alt="" class="showImage">
          <div class="tittleimg">
            <div><h2 class="showTitle">${show.name}</h2></div>
            <div class='stylelikes'>
            <div>
            <i class="fa-regular fa-heart"></i>
              <i class="fa-solid fa-heart" style='display:none;'></i>
            </div>
             <div>
             <span class="likeCount">1 like</span>
             </div>
            </div>
          </div>
            <div class="genres">
            ${show.genres.join(' ')}
            </div>
                <div>
                  <button id='${show.id}'>comments</button>
                </div>
                <div>
                  <button>Reservations</button>
                </div>
          </li>`;
      showContainer.insertAdjacentHTML('beforeend', htmlString);
    } */
}
