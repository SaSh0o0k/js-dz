//TODO  2.Реализовать интерактивную шпаргалку для визуализации свойства flex-direction.
//TODO  Пример на рисунке. По нажатию на кнопку элементы становятся
//TODO  определенным образом(в зависимости от указанного значения);


const parent = document.querySelector(".parent");

// Функція для зміни напрямку кнопками зміною flex-direction
function changeFlexDirection(direction) {
    parent.style.flexDirection = direction;
}


// Для стилів кнопок

let activeButton = null;

function handleButtonClick(button) {
    if (activeButton) {
        activeButton.style.backgroundColor = "";
        activeButton.style.color = "";
    }

    button.style.backgroundColor = "#4fc3f7";
    button.style.color = "white";

    activeButton = button;
}

document.getElementById("btn-row").addEventListener("click", function () {
    handleButtonClick(this);
});

document.getElementById("btn-row-reverse").addEventListener("click", function () {
    handleButtonClick(this);
});

document.getElementById("btn-column").addEventListener("click", function () {
    handleButtonClick(this);
});

document.getElementById("btn-column-reverse").addEventListener("click", function () {
    handleButtonClick(this);
});
