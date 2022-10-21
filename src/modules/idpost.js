export default async function postlikes(idcard) {
  const urlgetlikes = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/OfV1qInwl9XDUHwiPKmO/likes?item_id=${idcard}`;
  const infolikes = await fetch(urlgetlikes, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const infolike = await infolikes.json();
  infolike.sort((a, b) => a.item_id - b.item_id);
  const displaylikes = document.getElementById(`count-${idcard}`);
  displaylikes.textContent = infolike[idcard].likes;
}