import getShows from "./getShows.js";
import postcoment from "./postcomments.js";
import createcomment from "./createComment.js";


export default async function popupadd (e){
        const popupinfo = document.getElementById('popupinfo');
       document.body.style.overflow= 'hidden';
        popupinfo.style.display = 'block';
        const idcard = parseInt(e.target.getAttribute('name'));
        let a =  await getShows().then((result)=>result);
        const popinfo = a.filter((info) => info.id === idcard);
        popinfo.forEach(element => {
            const popup = `
            <div class="popupinfo" overflow-y:auto; id='${element.id}'>
                <div class="styleimagepopup">
                    <div class="imagemovie">
                        <img id="imagen" class="styleclosepopup"  src="${element.image.original}" alt="" >
                     </div>
                <div>
                    <img id="closepopup" src="/imgs/closexbutton.png"  class="styleimgmovie" alt="">
                </div>
            </div>
            <div class='headcomments'>
            <div>
            <h3>comments</h3>
            </div>
            <span id='countcomments'></span>
            </div>
            <ul id='displaycomments'></ul>
                <h2>Descrpiton</h2>
            <div>${element.summary}</div>
                    <h3>add comment</h3>
            <div class='form'>
                    <input id='username' type="text" placeholder="your name">
                    <textarea id='comment' placeholder="your insights"></textarea>
                    <button name ='${element.id}'id="comments" type="submit">submit</button>
            </div>
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
        if (comments===null){
            popupinfo.innerHTML = '';
        }else{
            comments.addEventListener('click',postcoment);  
            createcomment(idcard);
        }
      
}

