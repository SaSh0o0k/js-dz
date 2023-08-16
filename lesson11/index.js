'use strict';
//!event, target, currentTarget
// const unique = document.getElementById('unique');
// function btnHandler(e) {
//   // e.stopPropagation();
//   console.log(e.target);//элемент по которому кликнули
//   console.log(e.currentTarget);//элемент чей обработчик отработал
// }
// unique.addEventListener('click', btnHandler );
// document.body.addEventListener('click', btnHandler);
// const article = document.getElementById('article');
// article.addEventListener('click', btnHandler);
// document.addEventListener('click', btnHandler);

//!once
// const unique = document.getElementById('unique');
// function btnHandler(e) {
//   console.log("Boom!");
//   setTimeout(() => {
//     e.target.addEventListener('click', btnHandler, { once: true });
//   }, 5_000);
// }
// unique.addEventListener('click', btnHandler, { once: true });

//!attribute
// const unique = document.getElementById('unique');
// console.log(unique.getAttribute('title'));
// unique.setAttribute('rel', 'relative text');

// const btns = document.querySelectorAll('article>button');
// console.log(btns);
// for (const btn of btns) {
//   // console.log(btn);
//   btn.addEventListener('click', (e) => {
//     // console.log(e.target);
//     // console.log(e.target.getAttribute('data-path'));
//     console.log(e.target.dataset.path);
//   })
// }

//TODO по клику на кнопку забрать заначение цвета
//TODO из дата-атрибута и задать его фону контейнера
// const btns = document.querySelectorAll('div>button');
// for (const btn of btns) {
//   btn.addEventListener('click', (e) => {
//     // console.log(e.target.dataset.color);
//     // e.target.style.backgroundColor = e.target.dataset.color;
//     e.target.parentElement.style.backgroundColor = e.target.dataset.color;
//   })
// }


