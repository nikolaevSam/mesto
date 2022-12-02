const popup_profile = document.getElementById('popup_profile');
const popup_element = document.getElementById('popup_element');
const buttonEdit = document.querySelector('.profile-info__edit');
const formElement = document.querySelector('.form');
let buttonAdd = document.querySelector('.profile__add');
let buttonClose = document.querySelectorAll('.popup__close');
let nameInput = formElement.querySelector('.form__input_data_name');
let jobInput = formElement.querySelector('.form__input_data_job');
let nameProfile = document.querySelector('.profile-info__title');
let jobProfile = document.querySelector('.profile-info__subtitle');
let popups = document.querySelectorAll('.popup');
let elementContainer = document.querySelector('.elements');
let buttonSave = document.getElementById('form_element');
let placeInput = document.querySelector('.form__input_data_place');
let urlInput = document.querySelector('.form__input_data_url');
const initialCards = [
  {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];
function addCards() {
  for (let i = 0; i < initialCards.length; i++) {
      elementContainer.insertAdjacentHTML('beforeend', `
  <article class="element">
  <button class="element__delete" aria-label="удалить место" type="button"></button>
  <img src="${initialCards[i].link}" alt="${initialCards[i].name}" class="element__image">
  <h2 class="element__text">${initialCards[i].name}</h2>
  <button class="element__like" type="button"></button>
  </article>
  `);
  };
};
addCards();
let buttonLike = elementContainer.querySelectorAll('.element__like');
let elements = elementContainer.querySelectorAll('.element');
let buttonDeletePlace = elementContainer.querySelectorAll('.element__delete');

let openPopupProfile = () => {
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
  popup_profile.classList.add('popup_opened');
};

let openPopupElement = () => {
  popup_element.classList.add('popup_opened');
};

let closePopup = () => {
  for (let i = 0; i < popups.length; i++) {
    popups[i].classList.remove('popup_opened');
  };
};

for (let i = 0; i < popups.length; i++) {
  buttonClose[i].addEventListener('click', closePopup);
};

function formSubmitHandler(evt) {
  evt.preventDefault(evt);
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  closePopup();
};

for (let i = 0; i < popups.length; i++) {
popups[i].addEventListener('click', function (event) {
  event.target === event.currentTarget ?
    closePopup() : false;
});
};

// const likeButtons = page.querySelectorAll(“.element__like”);
// function like(clickLike) {
//   clickLike.classList.toggle(“element__like_active”);
// }
// for (let i = 0; i < likeButtons.length; i++) {
//   likeButtons[i].addEventListener(“click”, () => like(likeButtons[i]));
// }

for (let i = 0; i < buttonLike.length; i++) {
  let addLike = () => {
      buttonLike[i].classList.toggle('element__like_active')
  };
  buttonLike[i].addEventListener('click', addLike);
};

for (let i = 0; i < elements.length; i++) {
  let deletePlace = () => {
      elements[i].remove();
  };
  buttonDeletePlace[i].addEventListener('click', deletePlace);
};

let addCard = (evt) => {
  evt.preventDefault(evt);
  elementContainer.insertAdjacentHTML('afterBegin', `
  <article class="element">
  <button class="element__delete" aria-label="удалить место" type="button"></button>
  <img src="${urlInput.value}" alt="${placeInput.value}" class="element__image">
  <h2 class="element__text">${placeInput.value}</h2>
  <button class="element__like" type="button"></button>
  </article>
  `);
  closePopup();
};

buttonSave.addEventListener('click', addCard);
buttonEdit.addEventListener('click', openPopupProfile);
buttonAdd.addEventListener('click', openPopupElement);
formElement.addEventListener('submit', formSubmitHandler);
