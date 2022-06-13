const pets = [
  {
    "name": "Jennifer",
    "img": "./assets/images/pets/pets-jennifer.png",
    "alt": "Щенок лабрадора белый",
    "type": "Dog",
    "breed": "Labrador",
    "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    "age": "2 months",
    "inoculations": ["none"],
    "diseases": ["none"],
    "parasites": ["none"],
    "id": 1,
  },
  {
    "name": "Sophia",
    "img": "./assets/images/pets/pets-sophia.png",
    "alt": "Щенок ши-тцу белый с чёрными ушами",
    "type": "Dog",
    "breed": "Shih tzu",
    "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    "age": "1 month",
    "inoculations": ["parvovirus"],
    "diseases": ["none"],
    "parasites": ["none"],
    "id": 2,
  },
  {
    "name": "Woody",
    "img": "./assets/images/pets/pets-woody.png",
    "alt": "Кобель золотистый ретривер взрослый",
    "type": "Dog",
    "breed": "Golden Retriever",
    "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    "age": "3 years 6 months",
    "inoculations": ["adenovirus", "distemper"],
    "diseases": ["right back leg mobility reduced"],
    "parasites": ["none"],
    "id": 3,
  },
  {
    "name": "Scarlett",
    "img": "./assets/images/pets/pets-scarlet.png",
    "alt": "Щенок джек-рассел-терьера белый с рыжими пятнами",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    "age": "3 months",
    "inoculations": ["parainfluenza"],
    "diseases": ["none"],
    "parasites": ["none"],
    "id": 4,
  },
  {
    "name": "Katrine",
    "img": "./assets/images/pets/pets-katrine.png",
    "alt": "Кошка тёмно-серая",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    "age": "6 months",
    "inoculations": ["panleukopenia"],
    "diseases": ["none"],
    "parasites": ["none"],
    "id": 5,
  },
  {
    "name": "Timmy",
    "img": "./assets/images/pets/pets-timmy.png",
    "alt": "Кошка светло-серая взрослая",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    "age": "2 years 3 months",
    "inoculations": ["calicivirus", "viral rhinotracheitis"],
    "diseases": ["kidney stones"],
    "parasites": ["none"],
    "id": 6,
  },
  {
    "name": "Freddie",
    "img": "./assets/images/pets/pets-freddie.png",
    "alt": "Котёнок полосатый на мордочке и лапах",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    "age": "2 months",
    "inoculations": ["rabies"],
    "diseases": ["none"],
    "parasites": ["none"],
    "id": 7,
  },
  {
    "name": "Charly",
    "img": "./assets/images/pets/pets-charly.png",
    "alt": "Взрослый средний пёс белый с рыжими пятнами",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    "age": "8 years",
    "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
    "diseases": ["deafness", "blindness"],
    "parasites": ["lice", "fleas"],
    "id": 8,
  }
]

// ============== БУРГЕР ====================== //

function dropDownMenu() { 
  // вкл/выкл выпадающего меню
  header.classList.toggle("dropdown");
  disablePageScroll(); 
}

function disablePageScroll() {
  // вкл/выкл прокрутку страницы
  page.classList.toggle("disable-scroll");
}

function rotateMenuButton() {
  // запускает поворот иконки меню на 90 градусов
  burger.classList.toggle("rotate");
}

const page = document.querySelector("body"); // вся страница
const header = document.querySelector(".header_wrap"); // контейнер для выпадашки

const shadowArea = document.querySelector(".navigation_shadow"); // затемнённая область
shadowArea.addEventListener("click", dropDownMenu); // выкл меню по тапу вне меню
shadowArea.addEventListener("click", rotateMenuButton); // поворот иконки по тапу вне меню 

const burger = document.querySelector(".menu-toggle"); // кнопка меню
burger.addEventListener("click", rotateMenuButton); // поворот иконки по тапу на иконку меню
burger.addEventListener("click", dropDownMenu); // выкл меню по тапу на иконку меню

const menuItems = document.querySelectorAll(".menu-item");
menuItems.forEach(elem => {
  elem.addEventListener("click", dropDownMenu);
});
menuItems.forEach(elem => {
  elem.addEventListener("click", rotateMenuButton);
})

// ====================== СЛАЙДЕР ============================== //

const sliderControls = document.querySelectorAll(".pets_slider_previous, .pets_slider_next");
// кнопки переключения слайда
sliderControls.forEach(elem => { // вешает событие создания слайда на каждую из кнопок
  elem.addEventListener("click", createSlide);
});

const slider = document.querySelector(".pets_slider_list"); // контейнер слайдера
const modalContent = document.querySelector(".modal_window"); // модальное окно

let currentSlideIds = []; // текущий набор id
function getRandomIds() { 
  // возвращает три случайные id питомцев, 
  // не дублирующие друг друга и не повторяющие предыдущие
  let result = [];
  let arrAllIds = pets.map(elem => elem.id); // все id питомцев
  
  let temp = []; // все id, кроме currentSlideIds
  for (let i = 0; i < arrAllIds.length; i++) {
    // пробегает по массиву всех id и
    if (!currentSlideIds.includes(arrAllIds[i])) {
      // добавляет во временный массив только те id,
      // которых не было на предыдущем шаге(currentSlideIds)
      temp.push(arrAllIds[i]);
    }
  }

  let i = 0;
  while (result.length < 3) {
    // добавляет в массив result только уникальные id,
    // чтобы не отображалось два одинаковых животных одновременно
    let num = temp[Math.floor(Math.random() * temp.length)]; // рандомный id из уникальных (temp)
    if (!result.includes(num)) {
      result.push(num);
      i++;
    }
    continue;
  }
  currentSlideIds = [...result]; // текущий отображающийся набор id 
  return result;
}

function getRandomPetsCard(ids) {
  // принимает из ф-ци getRandomIds три случайных id,
  // ищет их в массиве карточек питомцев и
  // и возвращает массив карточек для отображения
  let arr = [];
  for (let i = 0; i < ids.length; i++) {
    arr.push(pets.find((elem) => elem.id === ids[i]));
  }
  return arr;
}

function renderPetsCard(obj) {
  // принимает из ф-ции getRandomPetsCard три карточки питотмцев,
  // и возвращает разметку html с соотв-щими данными
  return `<div class="pets_slider_card" data-id="${obj.id}">
            <img src="${obj.img}" width="270" height="270" alt="${obj.alt}">
            <h3>${obj.name}</h3>
            <span class="learn-more_button">Learn more</span>
          </div>`;
}

let arrRandomPetsCard = []
function createSlide() {
  // вставляет в разметку html готовые рандомные карточки
  slider.innerHTML = ''; // удаляет все карточки в html
  const idsRandomCards = getRandomIds(); // три случайные id питомцев
  arrRandomPetsCard = getRandomPetsCard(idsRandomCards); // три случайные карточки
  for (let j = 0; j < arrRandomPetsCard.length; j++) { 
    // пока не кончатся рандомные карточки, создаёт их в html
    slider.insertAdjacentHTML("beforeend", renderPetsCard(arrRandomPetsCard[j]));
  }
}
createSlide(); // первый запуск слайдера при загрузке страницы

function showModal(info) {
  console.log(555);
  document.querySelector(".modal_photo").remove(); // удаляет существующее в модалке фото
  document.querySelector(".modal_content").remove(); // удаляет существующий в модалке контент
  modalContent.insertAdjacentHTML("afterbegin", info); // вставляет в модальное окно новую инфу
  modal.classList.remove("visually-hidden"); // снимает с модалки невидимость
}

function renderModalContent(obj) {
  // рендерит кусок html, вставляя внутрь данные из карточки, передаваемой внутрь ф-ции
  return `<div class="modal_photo">
            <img src="${obj.img}" alt="${obj.alt}">
          </div>
          <div class="modal_content">
            <h2 class="modal_content_name">${obj.name}</h2>
            <p class="modal_content_kind">${obj.type} - ${obj.breed}</p>
            <p class="modal_content_description">${obj.description}</p>
            <ul class="modal_content_list">
              <li class="modal_content_item"><b>Age:</b>${obj.age}</li>
              <li class="modal_content_item"><b>Inoculations:</b>${obj.inoculations}</li>
              <li class="modal_content_item"><b>Diseases:</b>${obj.diseases}</li>
              <li class="modal_content_item"><b>Parasites:</b>${obj.parasites}</li>
            </ul>
          </div>`
}

const interactiveElements = document.querySelectorAll(".modal_shadow, .modal_close-button");
interactiveElements.forEach(elem => {
  // скрывает модальное окно по клику на затемнённую область и крестик
  elem.addEventListener("click", closeModal);
});

const modal = document.querySelector(".modal");

function closeModal () {
  // скрывает модальное окно
  modal.classList.add("visually-hidden");
}



slider.addEventListener("click", (event) => { // на весь список петов вешаем обработчик
  let targetElem = event.target; // то, на что именно был клик
  if (targetElem.classList.contains("pets_slider_card")) { // если клик был по самой карточке, это то, что нам нужно
    let id = targetElem.dataset.id; // тогда id этого элемента = искомый id,
    const cart = arrRandomPetsCard.find(it => it.id === +id); // и мы ищем в массиве отрисованных петов объект по такому id
    let modalContent = renderModalContent(cart); // создаём html-карточку с нужными данными
    showModal(modalContent); // показываем модалку
    return;
  }
  let parentElem = targetElem.closest(".pets_slider_card"); // если клик был не по карточке, может тогда по её потомку (img, button)?
  if (!parentElem) { // если у targetElem всё же нет родителя-карточки, ничего не делаем
    return;
  }
  // в противном случае родитель targetElem должен быть нашей каротчкой
  let id = parentElem.dataset.id; // тогда id этого элемента = искомый id
  const cart = arrRandomPetsCard.find(it => it.id === +id); // и мы ищем в массиве отрисованных петов объект по такому id
  let modalContent = renderModalContent(cart); // создадим html-карточку с нужными данными

  showModal(modalContent); // показываем модалку
});