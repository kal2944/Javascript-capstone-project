export default async function postlikes(e){

const likeBtn = document.getElementById(".like__btn").value;
let likeIcon = document.querySelector("#icon"),
  count = document.querySelector("#count");

let clicked = false;
console.log (likeBtn) ;


likeBtn.addEventListener("click", () => {
  if (!clicked) {
    clicked = true;
    likeIcon.innerHTML = `<i class="fa-regular fa-heart"></i>`;
    count.textContent++;
  } else {
    clicked = false;
    likeIcon.innerHTML = `<i class="fa-regular fa-heart"></i>`;
    count.textContent--;
  }
});

const url='https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/OfV1qInwl9XDUHwiPKmO/likes'
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

const urlgetlikes=`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/OfV1qInwl9XDUHwiPKmO/likes?item_id=${item}`
console.log(urlgetlikes);
  const infolikes = await fetch(urlgetlikes,{
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    },
  );
  const infolike = await infolikes.json();
  infolike.forEach((item) => {
    const displaylikes= document.getElementById('displaylikes');
    const showlikes =`<li>${item.creation_date} : ${item.likes}  </li>`;
    displaylikes.insertAdjacentHTML('beforeend', showlikes);
    });
