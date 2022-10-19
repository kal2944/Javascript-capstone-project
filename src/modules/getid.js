export default async function getid(comment) {
    const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
    const response = await fetch(url,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: comment,
      Cache: 'default'
    });
    let data = await response.json();
    console.log(data);
  }