/** * @jest-environment jsdom */

import ShowLibrary from './ShowLibrary.js';

describe('testing adding elements', () => {
  const showContainer = document.getElementById('showList');
  it('add four elements', () => {
    const show = new ShowLibrary();
    show.ShowArray = [{
      id: '1',
      name: 'Franklin',
      genres: ['Violence', 'action'],
      image: { original: '1' },
    },
    {
      id: '2',
      username: 'annonimus',
      comment: 'kalidan the best',
      genres: ['Violence', 'action'],
      image: { original: '2' },
    },
    {
      id: '3',
      username: 'abraham',
      comment: 'crazy',
      genres: ['Violence', 'action'],
      image: { original: '3' },
    },
    {
      id: '4',
      username: 'claudia',
      comment: 'mom',
      genres: ['Violence', 'action'],
      image: { original: '4' },
    }];
    document.body.innerHTML = '<div>'
            + ' <ul id="showlist"><li></li></ul>'
            + '<div id="countmovies"></div>';

    expect(show.displayShows(show.ShowArray.length)).toBe(734);
  });

  it('when its empty', () => {
    const show = new ShowLibrary();
    show.ShowArray = [{}];
    document.body.innerHTML = '<div>'
          + ' <ul id="showlist"><li></li></ul>'
          + '<div id="countmovies"></div>';

    expect(show.displayShows(0, showContainer)).toBe(0);
  });
});