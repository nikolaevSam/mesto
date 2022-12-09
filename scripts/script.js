const buttonAdd = document.querySelector('.profile__add');
const buttonEdit = document.querySelector('.profile-info__edit');
const popupPlace = document.querySelector('.popup_element');
const popupProfile = document.querySelector('.popup_profile');
const popupImage = document.querySelector('.popup_zoom');
let formPlace = popupPlace.querySelector('.form');
let formProfile = popupProfile.querySelector('.form');
let inputPlace = popupPlace.querySelector('.form__input_data_place');
let inputUrl = popupPlace.querySelector('.form__input_data_url');
let nameInput = formProfile.querySelector('.form__input_data_name');
let jobInput = formProfile.querySelector('.form__input_data_job');
let nameProfile = document.querySelector('.profile-info__title');
let jobProfile = document.querySelector('.profile-info__subtitle');
let popups = document.querySelectorAll('.popup');
let elementImage = popupImage.querySelector('.popup__image');
let elementDescription = popupImage.querySelector('.popup__description')

let renderCard = (url, description) => {
  const elementTemplate = document.querySelector('#element-template').content;
  const element = elementTemplate.querySelector('.element').cloneNode(true);
  const elementText = element.querySelector('.element__text');
  const elementImage = element.querySelector('.element__image');
  elementText.textContent = description;
  elementImage.src = url;
  elementImage.alt = description;
};

let createCard = (evt) => {
  evt.preventDefault(evt);
  elementContainer.prepend(element);
  handleCloseButton(popupPlace);
};
formPlace.addEventListener('submit', createCard);

let handleSubmitForm = (evt) => {
  evt.preventDefault(evt);
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  handleCloseButton(popupProfile);
};

let handleOpenButton = (popupName) => {
  popupName.classList.add('popup_opened');
};

let handleCloseButton = (popupName) => {
  popupName.classList.remove('popup_opened');
};

let handleLikeButton = (evt) => {
  const likeButton = evt.target;
  if (likeButton.classList.contains('element__like')) {
    likeButton.classList.toggle('element__like_active');
  };
};

let handleDeleteButton = (evt) => {
  const element = evt.target.parentNode;
  const elementDelete = evt.target;
  if (element.classList.contains('element') &&
    elementDelete.classList.contains('element__delete')) {
    element.remove();
  };
};

let handleZoomImage = (evt) => {
  if (evt.target.classList.contains('element__image')) {
    elementImage.src = evt.target.src;
    elementImage.alt = evt.target.alt;
    elementDescription.textContent = evt.target.alt;
    handleOpenButton(popupImage);
  };
};

document.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('popup__close')) {
    evt.target.closest('.popup').classList.remove('popup_opened');
  }
});
document.addEventListener('click', handleZoomImage);
document.addEventListener('click', handleLikeButton);
document.addEventListener('click', handleDeleteButton);
formProfile.addEventListener('submit', handleSubmitForm);
buttonAdd.addEventListener('click', () => handleOpenButton(popupPlace));
buttonEdit.addEventListener('click', () => {
  handleOpenButton(popupProfile)
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
});
