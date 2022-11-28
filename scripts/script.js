const popup = document.querySelector('.popup');
const buttonEdit = document.querySelector('.profile-info__edit');
const buttonClose = popup.querySelector('.popup__close');
const formElement = document.querySelector('.form');
let nameInput = formElement.querySelector('.form__input_data_name');
let jobInput = formElement.querySelector('.form__input_data_job');
let nameProfile = document.querySelector('.profile-info__title');
let jobProfile = document.querySelector('.profile-info__subtitle');
const popupContainer = popup.querySelector('.popup__container');
let elementContainer = document.querySelector('.elements');
let buttonLike = elementContainer.querySelectorAll('.element__like');
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

let openPopup = () => {
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
  popup.classList.add('popup_opened');
};

let closePopup = () => {
  popup.classList.remove('popup_opened');
};

function formSubmitHandler(evt) {
  evt.preventDefault(evt);
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  closePopup();
};

popup.addEventListener('click', function (evt) {
  (evt.target === evt.currentTarget) ?
    closePopup()
    : false
});

for (let i = 0; i < buttonLike.length; i++) {
  let addLike = () => {
    buttonLike[i].classList.toggle('element__like_active')
  };
  buttonLike[i].addEventListener('click', addLike);
};

buttonEdit.addEventListener('click', openPopup);
buttonClose.addEventListener('click', closePopup);
formElement.addEventListener('submit', formSubmitHandler);

let elements = elementContainer.querySelectorAll('.element');
let buttonDeletePlace = elementContainer.querySelectorAll('.element__delete');
for (let i = 0; i < elements.length; i++) {
  let deletePlace = () => {
    elements[i].classList.remove('element');
  };
  buttonDeletePlace[i].addEventListener('click', deletePlace);
};

console.log({elements})
