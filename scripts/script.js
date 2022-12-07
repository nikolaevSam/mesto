const buttonAdd = document.querySelector('.profile__add');
const buttonEdit = document.querySelector('.profile-info__edit');
const buttonsClose = document.querySelectorAll('.popup__close');
const buttonsDeletePlace = document.querySelectorAll('.element__delete');
const buttonsLike = document.querySelectorAll('.element__like');
let popupPlace = document.getElementById('popup_element');
let popupProfile = document.getElementById('popup_profile');
let popupImage = document.getElementById('popup_image');
let formPlace = popupPlace.querySelector('.form');
let formProfile = popupProfile.querySelector('.form');
let inputPlace = popupPlace.querySelector('.form__input_data_place');
let inputUrl = popupPlace.querySelector('.form__input_data_url');
let nameInput = formProfile.querySelector('.form__input_data_name');
let jobInput = formProfile.querySelector('.form__input_data_job');
let nameProfile = document.querySelector('.profile-info__title');
let jobProfile = document.querySelector('.profile-info__subtitle');
let popupAll = document.querySelectorAll('.popup');
let elementAll = document.querySelectorAll('.element');
let imageAll = document.querySelectorAll('.element__image');
let elementImage = popupImage.querySelector('.popup__image');
let elementDescription = popupImage.querySelector('.popup__description')

let addCard = (evt) => {
  evt.preventDefault(evt);
  const elementTemplate = document.querySelector('#element-template').content;
  let element = elementTemplate.querySelector('.element').cloneNode(true);
  element.querySelector('.element__text').textContent = inputPlace.value;
  element.querySelector('.element__image').src = inputUrl.value;
  element.querySelector('.element__image').alt = inputPlace.value;
  element.querySelector('.element__like').addEventListener('click', () =>
    addLike(element.querySelector('.element__like'))
  );
  element.querySelector('.element__delete').addEventListener('click', () =>
    deletePlace(element)
  );
  element.querySelector('.element__image').addEventListener('click', (evt) => {
    openPopup(popup_image);
    elementImage.src = evt.target.src;
    elementImage.alt = evt.target.alt;
    elementDescription.textContent = evt.target.alt;
  });
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

let addLike = (clickLike) => {
  clickLike.classList.toggle('element__like_active');
};

let deletePlace = (deleteElement) => {
  deleteElement.remove();
};

for (let i = 0; i < popupAll.length; i++) {
  buttonsClose[i].addEventListener('click', closePopup);
};

for (let i = 0; i < buttonsLike.length; i++) {
  buttonsLike[i].addEventListener('click', () => addLike( buttonsLike[i]));
};

for (let i = 0; i < elementAll.length; i++) {
  buttonsDeletePlace[i].addEventListener('click', () => deletePlace(elementAll[i]));
};

for (i = 0; i < imageAll.length; i++) {
  imageAll[i].addEventListener('click', (evt) => {
    openPopup(popup_image);
    elementImage.src = evt.target.src;
    elementImage.alt = evt.target.alt;
    elementDescription.textContent = evt.target.alt;
  });
}

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
