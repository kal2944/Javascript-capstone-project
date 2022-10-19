import getShows from "./getShows.js";
import getid from "./getid.js";


export default async function popupadd (e){
        const popupinfo = document.getElementById('popupinfo');
        document.body.style.overflow= 'hidden';
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
                <h2>Descrpiton</h2>
            <div>${element.summary}</div>
                    <h3>add comment</h3>
                    <input id='username' type="text" placeholder="your name">
                    <textarea id='comment' placeholder="your insights"></textarea>
                    <button id="comments" type="submit">submit</button>
            </div>`;
            popupinfo.insertAdjacentHTML('beforeend', popup);
        });         
        const algo = document.getElementById('closepopup');
        if(algo===null){
            popupinfo.style.display = 'none';
            popupinfo.innerHTML = '';
            document.body.style.overflow= 'auto';
        }else{
            algo.addEventListener('click',()=>{ 
                document.body.style.overflow= 'auto';
                popupinfo.style.display = 'none';
                popupinfo.innerHTML = '';
                });
        }
        const comments = document.getElementById('comments');
        comments.addEventListener('click',()=>{
            const username = document.getElementById('username').value;
            const comment = document.getElementById('comment').value;
            getid(username,comment);
        })
    }
