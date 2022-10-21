
export default class ShowLibrary {
  constructor(Array) {
    this.ShowArray = Array;
  }

  displayShows(numberOfItems) {
    let count = 0;
    for (let i = 0; i < numberOfItems; i += 1) {
      count++;
      const show = this.ShowArray[i];
      const htmlString = `
        <li class="show" id="${show.id}">
          <img src="${show.image.original}" alt="" class="showImage">
        <div class="tittleimg">
          <div><h2 class="${show.id}" showTitle">${show.name}</h2></div>
          <div class='stylelikes'>
          <button id='${show.id}' class="likebtn">
              <span id="${show.id}"><i class="far fa-heart"></i></span>
              <span id="count-${show.id}"></span> Like
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
              <div>${show.id}</div>
        </li>`;
    }
    const countmovies = document.getElementById('countmovies');
    countmovies.textContent = count;
    return count;

  }
}
