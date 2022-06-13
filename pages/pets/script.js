const pets = [
  {
    "name": "Jennifer",
    "img": "../../assets/images/pets/pets-jennifer.png",
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
    "img": "../../assets/images/pets/pets-sophia.png",
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
    "img": "../../assets/images/pets/pets-woody.png",
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
    "img": "../../assets/images/pets/pets-scarlet.png",
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
    "img": "../../assets/images/pets/pets-katrine.png",
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
    "img": "../../assets/images/pets/pets-timmy.png",
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
    "img": "../../assets/images/pets/pets-freddie.png",
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
    "img": "../../assets/images/pets/pets-charly.png",
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

// ====================== POP_UP ====================== //

const petsList = document.querySelector(".our-pets_list");
const modalContent = document.querySelector(".modal_window");

petsList.addEventListener("click", (event) => { // на весь список петов вешаем обработчик
  let targetElem = event.target; // то, на что именно был клик
  if (targetElem.classList.contains("our-pets_card")) { // если клик был по самой карточке, это то, что нам нужно
    let id = targetElem.dataset.id; // тогда id этого элемента = искомый id,
    const cart = petsForPagination.find(it => it.id === +id); // и мы ищем в массиве отрисованных петов объект по такому id
    let modalContent = renderModalContent(cart); // создаём html-карточку с нужными данными
    showModal(modalContent); // показываем модалку
    return;
  }
  let parentElem = targetElem.closest(".our-pets_card"); // если клик был не по карточке, может тогда по её потомку (img, button)?
  if (!parentElem) { // если у targetElem всё же нет родителя-карточки, ничего не делаем
    return;
  }
  // в противном случае родитель targetElem должен быть нашей каротчкой
  let id = parentElem.dataset.id; // тогда id этого элемента = искомый id
  const cart = petsForPagination.find(it => it.id === +id); // и мы ищем в массиве отрисованных петов объект по такому id
  let modalContent = renderModalContent(cart); // создадим html-карточку с нужными данными
  showModal(modalContent); // показываем модалку
});

function showModal(info) {
  document.querySelector(".modal_photo").remove(); // удаляет существующее в модалке фото
  document.querySelector(".modal_content").remove(); // удаляет существующий в модалке контент
  modalContent.insertAdjacentHTML("afterbegin", info); // вставляет в модальное окно новую инфу
  modal.classList.remove("visually-hidden"); // снимает с модалки невидимость
  disablePageScroll();
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

function closeModal() {
  // скрывает модальное окно
  modal.classList.add("visually-hidden");
  disablePageScroll();
}

// ======================= PAGINATION ====================== ||

let cardsOnPage; // количество карточек на странице для отображения
let pageWidth = document.documentElement.clientWidth;
if (pageWidth < 768) {
  cardsOnPage = 3;
} else if (pageWidth < 1280) {
  cardsOnPage = 6;
} else {
  cardsOnPage = 8;
}

let currentPage = 1; // номер текущей страницы

const ourPetsList = document.querySelector(".our-pets_list");
const petsForPagination = [...shake(pets), ...shake(pets), ...shake(pets), ...shake(pets), ...shake(pets), ...shake(pets)].map((elem, index) => {
  return { ...elem, id: index };
}); // создаёт 48 карточек, каждые 8 в рандомном порядке, каждой карточке присваивает id по её индексу в массиве

function shake(arr) { // перемешивает входящий массив случайным образом
  arr.sort(() => {
    return (Math.random() - 0.5);
  })
  return arr;
}

function getElementsForCurrentPage(arr, currentPage, cardsOnPage) {
  pastElem = currentPage * cardsOnPage; // последний элемент на странице = текущий номер страницы * число элементов на странице (для 4 страницы последний элемент 4 * 8 = 32)
  firstElem = pastElem - cardsOnPage; // первый элемент на странице = последний элемент на странице - число элементов на странице (для 4 страницы это 32 - 8 = 24)
  return arr.slice(firstElem, pastElem); // возвращает массив с индекса 24 (включительно) по 32 (не включительно)
}

function renderOurPets(data) { // принимает массив карточек для отображения, очищает весь список на странице, и на каждом элементе (объекте) вызывает ф-цию рендера карточки
  ourPetsList.innerHTML = "";
  data.forEach((item) => {
    ourPetsList.insertAdjacentHTML("afterbegin", renderOurPetsCard(item));
  });
}
renderOurPets(getElementsForCurrentPage(petsForPagination, currentPage, cardsOnPage));

function renderOurPetsCard(obj) { // возвращает html-код для вставки с нужными данными
  return `<div class="our-pets_card" data-id="${obj.id}">
            <img src="${obj.img}" alt="${obj.alt}">
            <h3>${obj.name}</h3>
            <span class="learn-more_button">Learn more</span>
          </div>`
}

let lastPage = Math.ceil(petsForPagination.length / cardsOnPage);

const paginationCurr = document.querySelector(".our-pets_curr");


function changeStylePaginationButton() {
  if (currentPage > 1) {
    paginationBegin.classList.remove("disable");
    paginationBegin.classList.add("enable");

    paginationPrev.classList.remove("disable");
    paginationPrev.classList.add("enable");
  } else {
    paginationBegin.classList.add("disable");
    paginationBegin.classList.remove("enable");

    paginationPrev.classList.add("disable");
    paginationPrev.classList.remove("enable");
  }

  if (currentPage < lastPage) {
    paginationNext.classList.remove("disable");
    paginationNext.classList.add("enable");

    paginationEnd.classList.remove("disable");
    paginationEnd.classList.add("enable");
  } else {
    paginationNext.classList.add("disable");
    paginationNext.classList.remove("enable");

    paginationEnd.classList.add("disable");
    paginationEnd.classList.remove("enable");
  }
}

const paginationBegin = document.querySelector(".our-pets_begin");
paginationBegin.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage = 1;
    renderOurPets(getElementsForCurrentPage(petsForPagination, currentPage, cardsOnPage));
    paginationCurr.innerHTML = currentPage;
    changeStylePaginationButton();
  };
});

const paginationPrev = document.querySelector(".our-pets_prev");
paginationPrev.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    renderOurPets(getElementsForCurrentPage(petsForPagination, currentPage, cardsOnPage));
    paginationCurr.innerHTML = currentPage;
    changeStylePaginationButton();
  }
});


const paginationNext = document.querySelector(".our-pets_next");
paginationNext.addEventListener("click", () => {
  if (currentPage < lastPage) {
    currentPage++;
    renderOurPets(getElementsForCurrentPage(petsForPagination, currentPage, cardsOnPage));
    paginationCurr.innerHTML = currentPage;
    changeStylePaginationButton();
  }
});

const paginationEnd = document.querySelector(".our-pets_end");
paginationEnd.addEventListener("click", () => {
  if (currentPage < lastPage) {
    currentPage = lastPage;
    renderOurPets(getElementsForCurrentPage(petsForPagination, currentPage, cardsOnPage));
    paginationCurr.innerHTML = currentPage;
    changeStylePaginationButton();
  }
});
// ============================================================ //

