const elementTemplate = document.querySelector('#element-template').content;
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
const elementImage = popupImage.querySelector('.popup__image');
const elementDescription = popupImage.querySelector('.popup__description')
const buttonCloseList = Array.from(document.querySelectorAll('.popup__close'));
const popupList = Array.from(document.querySelectorAll('.popup'));

function createCard(url, description) {
  const element = elementTemplate.querySelector('.element').cloneNode(true);
  const elementText = element.querySelector('.element__text');
  const elementImage = element.querySelector('.element__image');
  const elementLike = element.querySelector('.element__like');
  const elementDelete = element.querySelector('.element__delete');
  elementText.textContent = description;
  elementImage.src = url;
  elementImage.alt = description;
  elementLike.addEventListener('click', () => handleLikeButton(elementLike));
  elementDelete.addEventListener('click', () => handleDeleteButton(element));
  elementImage.addEventListener('click', () => handleZoomImage(url, description));
  return element;
};

function renderCard(url, description) {
  elementContainer.prepend(createCard(url, description));
};

initialCards.forEach((item) => {
  elementContainer.append(createCard(item.link, item.name));
});

function addCard(evt) {
  evt.preventDefault();
  const url = inputUrl.value;
  const description = inputPlace.value;
  renderCard(url, description);
  inputUrl.value = '';
  inputPlace.value = '';
  handleClosePopup(popupPlace);
};

function handleSubmitForm(evt) {
  evt.preventDefault();
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  handleClosePopup(popupProfile);
};

function handleOpenPopup(popupName) {
  popupName.classList.add('popup_opened');
  document.addEventListener('keydown', escapeHandler);
};

function handleClosePopup(popupName) {
  popupName.classList.remove('popup_opened');
};

function handleZoomImage(url, description) {
  elementImage.src = url;
  elementImage.alt = description;
  elementDescription.textContent = description;
  handleOpenPopup(popupImage);
};

function handleLikeButton(buttonLike) {
  buttonLike.classList.toggle('element__like_active');
};

function handleDeleteButton(element) {
  element.remove();
};

function escapeHandler(evt) {
  if (evt.key === 'Escape') {
    const popup = document.querySelector('.popup_opened');
    handleClosePopup(popup);
  };
};

buttonCloseList.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => handleClosePopup(popup));
});
formPlace.addEventListener('submit', addCard);
formProfile.addEventListener('submit', handleSubmitForm);
buttonAdd.addEventListener('click', () => handleOpenPopup(popupPlace));
buttonEdit.addEventListener('click', () => {
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
  handleOpenPopup(popupProfile);
});
popupList.forEach((popup) => {
  popup.addEventListener('click', (evt) => {
    if (evt.target === evt.currentTarget) {
      handleClosePopup(popup);
    };
  });
});