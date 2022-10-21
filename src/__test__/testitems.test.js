/** * @jest-environment jsdom */

import postlikes from "../modules/idpost.js";
import ShowLibrary from "../modules/ShowLibrary.js"


describe('testing adding elements',()=>{
   
    test('add four elements',()=>{
        const show = new ShowLibrary();
        show.ShowArray = [{
            id: '1',
            name: 'Franklin',
            genres: 'Violence',
            image:{original:'1'}
          },
          {
            id: '2',
            username: 'annonimus',
            comment: 'kalidan the best',
            image:{original:'2'}
          },
          {
            id: '3',
            username: 'abraham',
            comment: 'crazy',
            image:{original:'3'}
          },
          {
            id: '4',
            username: 'claudia',
            comment: 'mom',
            image:{original:'4'}
          }];
          postlikes(4);
        document.body.innerHTML = '<div>'
            + ' <ul id="showlist"><li></li></ul>'
            + '<div id="countmovies"></div>';

        expect(show.displayShows(3)).tobe(3);
    })
});