import getShows from "./getShows.js";
import getid from "./getid.js";
import postcoment from "./postcomments.js";


export default async function popupadd (e){
        const popupinfo = document.getElementById('popupinfo');
       /*  document.body.style.overflow= 'hidden'; */
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
            <h3>comments</h3>
            <ul id='displaycomments'></ul>
                <h2>Descrpiton</h2>
            <div>${element.summary}</div>
            <form>
                    <h3>add comment</h3>
                    <input id='username' type="text" placeholder="your name">
                    <textarea id='comment' placeholder="your insights"></textarea>
                    <button name ='${element.id}'id="comments" type="submit">submit</button>
            </form>
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
            const urlgetcomment=`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/OfV1qInwl9XDUHwiPKmO/comments?item_id=${idcard}`
            const infocoment = await fetch(urlgetcomment,{
                method: 'GET',
                headers: {
                  'Content-type': 'application/json; charset=UTF-8',
                },
              },
            );
            const infocmnt = await infocoment.json();
            infocmnt.forEach((item) => {
              const displaycoments= document.getElementById('displaycomments');
              const showcomments =`<li>${item.creation_date} : ${item.username} :${item.comment} </li>`;
              displaycoments.insertAdjacentHTML('beforeend', showcomments);
              });
        }
      
}

