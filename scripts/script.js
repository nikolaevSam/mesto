const buttonAdd = document.querySelector('.profile__add');
const buttonEdit = document.querySelector('.profile-info__edit');
// const buttonsClose = document.querySelectorAll('.popup__close'); // delete
// const buttonsDeletePlace = document.querySelectorAll('.element__delete');  // delete
// const buttonsLike = document.querySelectorAll('.element__like'); // delete
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
// let elements = document.querySelectorAll('.element');  // delete
let images = document.querySelectorAll('.element__image'); // delete
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
    handleLikeButton(element.querySelector('.element__like'))
  );
  element.querySelector('.element__delete').addEventListener('click', () =>
  handleDeleteButton(element)
  );
  element.querySelector('.element__image').addEventListener('click', (evt) => {
    handleOpenButton(popupImage);
    elementImage.src = evt.target.src;
    elementImage.alt = evt.target.alt;
    elementDescription.textContent = evt.target.alt;
  });
  elementContainer.prepend(element);
  handleCloseButton();
};

let handleSubmitForm = (evt) => {
  evt.preventDefault(evt);
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  handleCloseButton();
};

let handleOpenButton = (popupName) => {
  popupName.classList.add('popup_opened');
};

let handleCloseButton = (evt) => {
  evt.currentTarget.parentNode.classList.remove('popup_opened');
};

let handleLikeButton = (evt) => {
  evt.currentTarget.classList.toggle('element__like_active');
};

let handleDeleteButton = (deleteElement) => {
  deleteElement.remove();
};


// not delete
// let click = (evt) => {
//   evt.target.classList.toggle('element__like_active');
//   console.log(evt.target.classList)
// };

// document.querySelector('.element__like').addEventListener('click', handleLikeButton);


// for (let i = 0; i < popups.length; i++) {
//   buttonsClose[i].addEventListener('click', handleCloseButton);
// };

// for (let i = 0; i < buttonsLike.length; i++) {
//   buttonsLike[i].addEventListener('click', () => handleLikeButton( buttonsLike[i]));
// };

// for (let i = 0; i < elements.length; i++) {
//   buttonsDeletePlace[i].addEventListener('click', () => handleDeleteButton(elements[i]));
// };

for (i = 0; i < images.length; i++) {
  images[i].addEventListener('click', (evt) => {
    handleOpenButton(popupImage);
    elementImage.src = evt.target.src;
    elementImage.alt = evt.target.alt;
    elementDescription.textContent = evt.target.alt;
  });
}

// for (let i = 0; i < popups.length; i++) {
//   popups[i].addEventListener('click', (event) => {
//     event.target === event.currentTarget
//     handleCloseButton()
//   });
// };

formProfile.addEventListener('submit', handleSubmitForm);
formPlace.addEventListener('submit', addCard);
buttonAdd.addEventListener('click', () => handleOpenButton(popupPlace));
buttonEdit.addEventListener('click', () => {
  handleOpenButton(popupProfile)
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
});
