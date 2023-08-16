'use strict';

// Функція для створення блоку з зірками відгуку
function createStars(review) {
  const starsContainer = document.createElement('div');
  starsContainer.classList.add('stars');

  // Створення зірок відповідно до кількості зірок відгуку
  for (let i = 0; i < review.stars; i++) {
    const star = document.createElement('img');
    star.classList.add('star');
    star.src = "/images/Star 1.png";
    starsContainer.appendChild(star);
  }

  return starsContainer;
}

// Функція для створення блоку з коментарем відгуку
function createComment(review) {
  const comment = document.createElement('div');
  comment.classList.add('comment');
  comment.textContent = review.comment;

  return comment;
}

// Функція для створення блоку з інформацією про людину, що залишила відгук
function createPerson(review) {
  const person = document.createElement('div');
  person.classList.add('person');

  const photo = document.createElement('img');
  photo.classList.add('imageProfile');
  photo.src = review.photo;
  photo.alt = 'Фото';

  const info = createInfo(review);

  person.appendChild(photo);
  person.appendChild(info);

  return person;
}

// Функція для створення блоку з інформацією про людину (ім'я та компанія)
function createInfo(review) {
  const info = document.createElement('div');
  info.classList.add('info');

  const name = document.createElement('div');
  name.classList.add('name');
  name.textContent = review.name;

  const company = document.createElement('div');
  company.classList.add('company');
  company.textContent = review.company;

  info.appendChild(name);
  info.appendChild(company);

  return info;
}

// Функція для створення слайда відгуку
function createSlide(review) {
  const slide = document.createElement('div');
  slide.classList.add('slider-item');

  const stars = createStars(review); // Створення блоку зі зірками відгуку
  const comment = createComment(review); // Створення блоку з коментарем відгуку
  const person = createPerson(review); // Створення блоку з інформацією про людину

  slide.appendChild(stars);
  slide.appendChild(comment);
  slide.appendChild(person);

  return slide;
}

// Функція для відображення відгуків
function renderSlider(reviewsData) {
  if (reviewsData.length > 0) {
    const firstReview = reviewsData[0];
    const slide = createSlide(firstReview); // Створення слайда на основі першого відгуку
    sliderContainer.appendChild(slide);
  }
}

// Функція для створення блоку з кнопками сторінок
function createPageButtons() {
  const pages = document.createElement('div');
  pages.classList.add('pages');

  const pageButtons = [];

  for (let i = 1; i <= reviewsData.length; i++) {
    const page = document.createElement('div');
    page.classList.add('page');
    pages.appendChild(page);
    pageButtons.push(page);

    page.addEventListener('click', () => {
      setCurrentPage(i);
    });
  }

  return { pages, pageButtons };
}

// Функція для встановлення поточної сторінки
function setCurrentPage(pageIndex) {
  for (let i = 0; i < pageButtons.length; i++) {
    if (i === pageIndex - 1) {
      pageButtons[i].style.backgroundColor = "#65C466";
    } else {
      pageButtons[i].style.backgroundColor = "";
    }
  }
}

// Функція для створення кнопки
function createButton() {
  const button = document.createElement('div');
  button.classList.add('Button');

  const leftButton = createArrowButton('leftButton');
  const rightButton = createArrowButton('rightButton');

  button.appendChild(leftButton);
  button.appendChild(rightButton);

  return button;
}

// Функція для створення кнопки зі стрілкою
function createArrowButton(className) {
  const button = document.createElement('button');
  button.classList.add(className);

  const img = document.createElement('img');
  img.src = "/images/pageBtn.png";
  img.alt = "";

  button.appendChild(img);

  return button;
}

// Функція для оновлення слайдера
function updateSlider() {
  while (sliderContainer.firstChild) {
    sliderContainer.firstChild.remove();
  }

  const currentReview = reviewsData[currentSlideIndex];
  const slide = createSlide(currentReview);
  sliderContainer.appendChild(slide);

  setCurrentPage(currentSlideIndex + 1);
}

// Використання:

const Container = document.querySelector(".Otzivu");
const sliderContainer = document.querySelector('.Review');

let currentSlideIndex = 0;
const { pages, pageButtons } = createPageButtons();

// Ініціалізація слайдера
function initializeSlider() {
  Container.appendChild(pages);
  renderSlider(reviewsData);
  setCurrentPage(1);

  const button = createButton();
  Container.appendChild(button);

  const leftButton = button.querySelector('.leftButton');
  const rightButton = button.querySelector('.rightButton');

  leftButton.addEventListener('click', () => {
    if (currentSlideIndex > 0) {
      currentSlideIndex--;
      updateSlider();
    }
  });

  rightButton.addEventListener('click', () => {
    if (currentSlideIndex < reviewsData.length - 1) {
      currentSlideIndex++;
      updateSlider();
    }
  });
}

initializeSlider();
