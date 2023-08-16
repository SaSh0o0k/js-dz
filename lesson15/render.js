// Функція створення HTML розмітки для акторів
function createActorCard(actor) {
  const card = document.createElement('div');
  card.classList.add('card');

  const content = document.createElement('div');
  content.classList.add('content');

  const img = document.createElement('div');
  img.classList.add('img');
  const actorImg = document.createElement('img');
  actorImg.src = actor.profilePicture;
  actorImg.alt = '';
  img.appendChild(actorImg);

  const name = document.createElement('div');
  name.classList.add('name');
  name.textContent = `${actor.firstName} ${actor.lastName}`;

  const mediaIcons = document.createElement('div');
  mediaIcons.classList.add('media-icons');

  actor.contacts.forEach(contact => {
    const link = document.createElement('a');
    link.href = contact;
    link.target = '_blank';
    const icon = document.createElement('i');
    icon.classList.add('fab');

    if (contact.includes('facebook')) {
      icon.classList.add('fa-facebook-f');
    } else if (contact.includes('twitter')) {
      icon.classList.add('fa-twitter');
    } else if (contact.includes('instagram')) {
      icon.classList.add('fa-instagram');
    }

    link.appendChild(icon);
    mediaIcons.appendChild(link);
  });

  content.appendChild(img);
  content.appendChild(name);
  content.appendChild(mediaIcons);
  card.appendChild(content);

  // Вибір актора
  card.addEventListener('click', () => {
    if (!selectedActors.includes(actor)) {
      selectedActors.push(actor);
      renderSelectedActors();
    }
  });

  return card;
}

// Відображення обраних акторів
function renderSelectedActors() {
  chosenContainer.innerHTML = '';
  selectedActors.forEach(actor => {
    if (actor.firstName && actor.lastName) {

      const name = document.createElement('div');
      name.classList.add('selected-actor');
      name.textContent = `${actor.firstName} ${actor.lastName}`;

      const deleteButton = document.createElement('button');
      deleteButton.classList.add('delete-button');
      deleteButton.textContent = 'Delete';
      deleteButton.addEventListener('click', () => {
        const index = selectedActors.indexOf(actor);
        if (index !== -1) {
          selectedActors.splice(index, 1);
          renderSelectedActors();
        }
      });

      const listItem = document.createElement('li');
      listItem.appendChild(name);
      listItem.appendChild(deleteButton);
      chosenContainer.appendChild(listItem);
    }
  });
}

// Відображення акторів
function renderActors(actors) {
  actorsContainer.innerHTML = '';
  actors.forEach(actor => {
    const card = createActorCard(actor);
    actorsContainer.appendChild(card);
  });
}

const actorsContainer = document.querySelector('.cards');
const chosenContainer = document.querySelector('.chosed');

const selectedActors = [];

// Отримання даних із файлу data.json
function fetchData() {
  return fetch('data.json')
    .then(response => response.json())
    .catch(error => {
      console.error('Помилка при отриманні даних:', error);
      return [];
    });
}

fetchData().then(actors => {
  renderActors(actors);
  renderSelectedActors();
});
