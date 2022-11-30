const popup = document.querySelector('.popup');
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
let elementContainer = document.querySelector('.elements');
let buttonLike = elementContainer.querySelectorAll('.element__like');

let openPopupProfile = () => {
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
  popup_profile.classList.add('popup_opened');
};

let openPopupElement = () => {
  popup_element.classList.add('popup_opened');
};

let closePopup = () => {
  popup.classList.remove('popup_opened');
}

for (let i = 0; i < buttonClose.length; i++) {
  buttonClose[i].addEventListener('click', closePopup);
};

for (let i = 0; i < buttonLike.length; i++) {
  let addLike = () => {
      buttonLike[i].classList.toggle('element__like_active')
  };
  buttonLike[i].addEventListener('click', addLike);
};;

function formSubmitHandler(evt) {
  evt.preventDefault(evt);
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  closePopup();
};

popup.addEventListener('click', function (event) {
  event.target === event.currentTarget ?
    closePopup() : false;
});

buttonEdit.addEventListener('click', openPopupProfile);
buttonAdd.addEventListener('click', openPopupElement);
formElement.addEventListener('submit', formSubmitHandler);
