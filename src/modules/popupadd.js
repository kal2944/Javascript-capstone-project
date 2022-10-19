import getShows from "./getShows.js";


export default async function popupadd (e){
        const popupinfo = document.getElementById('popupinfo');
        popupinfo.style.display = 'block';
        const commentmovie = parseInt(e.target.getAttribute('name'));
        let a =  await getShows().then((result)=>result);
        const popinfo = a.filter((info) => info.id === commentmovie);
        popinfo.forEach(element => {
            const popup = `
            <div class="popupinfo">
                <div class="styleimagepopup">
                    <div class="imagemovie">
                        <img id="imagen" class="styleclosepopup"  src="${element.image.original}" alt="" >
                     </div>
                <div>
                    <img id="closepopup" src="/imgs/closexbutton.png"  class="styleimgmovie" alt="">
                </div>
            </div>
            <h3>comments</h3>
            <ul></ul>
                <h2>movie</h2>
            <div>${element.summary}</div>
                    <h3>add comment</h3>
                    <input type="text" placeholder="your name">
                    <textarea placeholder="your insights">add your message</textarea>
                    <button type="submit">submit</button>
            </div>`;
            popupinfo.insertAdjacentHTML('beforeend', popup);
        });         
        const algo = document.getElementById('closepopup');
        algo.addEventListener('click',()=>{ 
        popupinfo.style.display = 'none';
        popupinfo.innerHTML = '';

    })
}


