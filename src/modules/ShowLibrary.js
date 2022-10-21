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
          <button class="like__btn">
   <span id="icon"><i class="far fa-heart"></i></span>
   <span id="count">0</span> Like
</button>
          </div>
        </div>
          <div class="genres">
          ${show.genres.join(' ')}
          </div>
              <div>
                <button name='${show.id}' type="button">comments</button>
              </div>
              <div>
                <button type="button">Reservations</button>
              </div>
        </li>`;
      showContainer.insertAdjacentHTML('beforeend', htmlString);
    }
  }
}
