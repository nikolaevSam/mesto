const buttonAdd = document.querySelector('.profile__add');
const buttonEdit = document.querySelector('.profile-info__edit');
const popupPlace = document.querySelector('.popup_element');
const popupProfile = document.querySelector('.popup_profile');
const popupImage = document.querySelector('.popup_zoom');
const elementContainer = document.querySelector('.elements');
const formPlace = popupPlace.querySelector('.form');
const formProfile = popupProfile.querySelector('.form');
const inputPlace = popupPlace.querySelector('.form__input_data_place');
const inputUrl = popupPlace.querySelector('.form__input_data_url');
const nameInput = formProfile.querySelector('.form__input_data_name');
const jobInput = formProfile.querySelector('.form__input_data_job');
const nameProfile = document.querySelector('.profile-info__title');
const jobProfile = document.querySelector('.profile-info__subtitle');
const popups = document.querySelectorAll('.popup');
const elementImage = popupImage.querySelector('.popup__image');
const elementDescription = popupImage.querySelector('.popup__description')

const createCard = (url, description) => {
  const elementTemplate = document.querySelector('#element-template').content;
  const element = elementTemplate.querySelector('.element').cloneNode(true);
  const elementText = element.querySelector('.element__text');
  const elementImage = element.querySelector('.element__image');
  elementText.textContent = description;
  elementImage.src = url;
  elementImage.alt = description;
  return element;
};

const renderCard = (evt) => {
  elementContainer.prepend(createCard(inputUrl, inputPlace));
};

const addCard = (evt) => {
  evt.preventDefault();
  const taskName = input.value;
  renderTodo(taskName)
  inputUrl.value = '';
  inputPlace
};

const handleSubmitForm = (evt) => {
  evt.preventDefault(evt);
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  handleCloseButton(popupProfile);
};

const handleOpenButton = (popupName) => {
  popupName.classList.add('popup_opened');
};

const handleCloseButton = (popupName) => {
  popupName.classList.remove('popup_opened');
};

const handleLikeButton = (evt) => {
  const likeButton = evt.target;
  if (likeButton.classList.contains('element__like')) {
    likeButton.classList.toggle('element__like_active');
  };
};

const handleDeleteButton = (evt) => {
  const element = evt.target.parentNode;
  const elementDelete = evt.target;
  if (element.classList.contains('element') &&
    elementDelete.classList.contains('element__delete')) {
    element.remove();
  };
};

const handleZoomImage = (evt) => {
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
  };
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
