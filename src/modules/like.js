import postlikes from "./idpost.js";
export default async function idpost(idcard){
  let datainfo ={
      item_id:  idcard
  }

const url='https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/OfV1qInwl9XDUHwiPKmO/likes';
const responst = await fetch(url,
    {
      method: 'POST',
      headers: {
        'content-Type': 'application/json',
      },
      body: JSON.stringify(datainfo),
    },
  );
  const result = await responst.text();
  postlikes(idcard);
  return result;
} 


