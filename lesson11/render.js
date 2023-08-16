//TODO  1.Если картинки нет - отображать первые буквы
//TODO  имени и фамилии. 
//TODO  2.Если картинки нет - цвет фона должен быть
//TODO  разный(генерировать по имени)
//TODO  https://stackoverflow.com/questions/3426404/create-a-hexadecimal-colour-based-on-a-string-with-javascript
//TODO  3.Учесть, что в объекте может быть пустое
//TODO  имя "" или пустая картинка ""
//TODO  (в data.js) объекты с id 7 и 8


// console.log(actors);

const cardsList = document.getElementById('cards-list');
const HTMLCards = actors.map((actor) => createCard(actor));

function photoErrorHandler({ target }) {
  target.remove();
}

function createCard(actor) {
  const li = document.createElement('li');
  li.classList.add('card-wrapper');

  const article = document.createElement('article');
  article.classList.add('card-container');

  const divCardPhotoWrapper = document.createElement('div');
  divCardPhotoWrapper.classList.add('card-photo-wrapper');

  const divCardInitials = document.createElement('div');
  divCardInitials.classList.add('card-initials');

  const color = generateColor(actor.name || "No Name");
  if (actor.name != "") {
    const initials = actor.name[0] + (actor.name.includes(' ') ? actor.name.split(' ')[1][0] : '');
    divCardInitials.innerText = initials;
  }
  else {
    divCardInitials.innerText = "N/A";
  }
  divCardInitials.style.backgroundColor = color;

  const img = document.createElement('img');
  img.classList.add('card-photo');
  img.setAttribute('src', actor.photo);
  img.setAttribute('alt', actor.name);
  img.addEventListener('error', photoErrorHandler);
  divCardPhotoWrapper.appendChild(divCardInitials);
  divCardPhotoWrapper.appendChild(img);

  const h2 = document.createElement('h2');
  h2.classList.add('card-fullname');
  h2.append(document.createTextNode(actor.name || "No Name"));

  const p = document.createElement('p');
  p.classList.add('card-description');
  p.append(document.createTextNode(actor.birthdate))

  article.append(divCardPhotoWrapper, h2, p);
  li.append(article);
  return li;
}

cardsList.append(...HTMLCards);


//*  2. Рандомний колір

function generateColor(name) {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  const color = (hash & 0x00ffffff).toString(16).toUpperCase();
  return "#" + "00000".substring(0, 6 - color.length) + color;
}