const buttonAdd = document.querySelector('.profile__add');
const buttonEdit = document.querySelector('.profile-info__edit');
const buttonClose = document.querySelectorAll('.popup__close');
const buttonDeletePlace = document.querySelectorAll('.element__delete');
const buttonLike = document.querySelectorAll('.element__like');
let elementPlace = document.getElementById('popup_element');
let elementProfile = document.getElementById('popup_profile');
let formPlace = elementPlace.querySelector('.form');
let formProfile = elementProfile.querySelector('.form');
let inputPlace = elementPlace.querySelector('.form__input_data_place');
let inputUrl = elementPlace.querySelector('.form__input_data_url');
let nameInput = formProfile.querySelector('.form__input_data_name');
let jobInput = formProfile.querySelector('.form__input_data_job');
let nameProfile = document.querySelector('.profile-info__title');
let jobProfile = document.querySelector('.profile-info__subtitle');
let popupAll = document.querySelectorAll('.popup');
let elementAll = document.querySelectorAll('.element');

let addCard = (evt) => {
  evt.preventDefault(evt);
  const elementTemplate = document.querySelector('#element-template').content;
  let element = elementTemplate.querySelector('.element').cloneNode(true);
  element.querySelector('.element__text').textContent = inputPlace.value;
  element.querySelector('.element__image').src = inputUrl.value;
  element.querySelector('.element__image').alt = inputPlace.value;
  elementContainer.prepend(element);
  closePopup();
};

let formSubmitHandler = (evt) => {
  evt.preventDefault(evt);
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  closePopup();
};

let openPopup = (popupName) => {
  popupName.classList.add('popup_opened');
};

let closePopup = () => {
  for (let i = 0; i < popupAll.length; i++) {
    popupAll[i].classList.remove('popup_opened');
  };
};

for (let i = 0; i < popupAll.length; i++) {
  buttonClose[i].addEventListener('click', closePopup);
};

for (let i = 0; i < buttonLike.length; i++) {
  let addLike = () => {
    buttonLike[i].classList.toggle('element__like_active')
  };
  buttonLike[i].addEventListener('click', addLike);
};

for (let i = 0; i < elementAll.length; i++) {
  let deletePlace = () => {
    elementAll[i].remove();
  };
  buttonDeletePlace[i].addEventListener('click', deletePlace);
};

for (let i = 0; i < popupAll.length; i++) {
  popupAll[i].addEventListener('click', (event) => {
    event.target === event.currentTarget ?
      closePopup() : false;
  });
};

formProfile.addEventListener('submit', formSubmitHandler);
formPlace.addEventListener('submit', addCard);
buttonAdd.addEventListener('click', () => openPopup(popup_element));
buttonEdit.addEventListener('click', () => {
  openPopup(popup_profile)
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
});

let elementImage = document.querySelectorAll('.element__image');
 let zoom = () => {
  for (let i = 0; i < elementImage.length; i++) {

  }
 }
document.querySelector('.element__image').addEventListener('click', (evt) => {
  console.log(evt.target.src);
  Console.log(evt.target.alt);
});
