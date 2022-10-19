export default class ShowLibrary {
    constructor(Array) {
      this.ShowArray = Array;
    }
  
    /**
     * Creates specified amount of items and appends them to the specified Container
     * @param {number} numberOfItems
     * @param {Element} showContainer
     */
    displayShows(numberOfItems, showContainer) {
      for (let i = 0; i < numberOfItems; i += 1) {
        const show = this.ShowArray[i];
        const htmlString = `
        <li class="show" id="${show.id}">
          <img src="${show.image.medium}" alt="" class="showImage">
          <h2 class="showTitle">${show.name}</h2>
          <div class="showDescription">${show.summary}</div>
          <div class="genres">
          </div>
          <div class="interactions">
            <div class="comment">
              <i class="fa-regular fa-comment-dots"></i>
            </div>
            <div class="like">
              <i class="fa-regular fa-heart"></i>
              <i class="fa-solid fa-heart" style='display:none;'></i>
              <span class="likeCount"></span>
            </div>
          </div>
        </li>
        `;
        showContainer.insertAdjacentHTML('beforeend', htmlString);
      }
    }
  }