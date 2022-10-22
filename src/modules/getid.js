export default async function getid(username, comments) {
  const data = {
    user: username,
    Text: comments,
  };
  const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
  const responst = await fetch(url,
    {
      method: 'POST',
      headers: {
        'content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  const result = await responst.text();
  return result;
}