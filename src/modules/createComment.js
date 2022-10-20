
export default async function createcomment(item){
    const urlgetcomment=`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/OfV1qInwl9XDUHwiPKmO/comments?item_id=${item}`
    const infocoment = await fetch(urlgetcomment,{
        method: 'GET',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      },
    );
    const infocmnt = await infocoment.json();
    const displaycoments= document.getElementById('displaycomments');
    const commentscount = document.getElementById('countcomments');
    displaycoments.innerHTML=''; 
    infocmnt.forEach((item) => {
      const showcomments =`<li>${item.creation_date} : ${item.username} :${item.comment} </li>`;
      displaycoments.insertAdjacentHTML('beforeend', showcomments);
      commentscount.textContent = infocmnt.length;
});
    return infocmnt.length;
}