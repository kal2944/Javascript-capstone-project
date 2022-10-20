
export default async function postcoment(e){
        const username = document.getElementById('username').value;
        const comment = document.getElementById('comment').value;
        const item = parseInt(e.target.getAttribute('name'));
        if(username!==''|| comment!==''){
          const data = {
              item_id:item,
              username,
              comment,
            };
           const url= 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/OfV1qInwl9XDUHwiPKmO/comments'
           const responst = await fetch(url,
              {
                method: 'POST',
                headers: {
                  'content-Type': 'application/json',
                },
                body: JSON.stringify(data),
              },
            );
            const result = await responst.text()
            console.log(result);
        }
  const urlgetcomment=`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/OfV1qInwl9XDUHwiPKmO/comments?item_id=${item}`
      console.log(urlgetcomment);
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