
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

}