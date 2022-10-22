import createcomment from './createComment.js';

export default async function postcoment(e) {
  const username = document.getElementById('username').value;
  const comment = document.getElementById('comment').value;
  const item = parseFloat(e.target.getAttribute('name'));
  const data = {
    item_id: item,
    username,
    comment,
  };
  if (username !== '' || comment !== '') {
    createcomment(item);
    const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/OfV1qInwl9XDUHwiPKmO/comments';
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
  const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/OfV1qInwl9XDUHwiPKmO/comments';
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
