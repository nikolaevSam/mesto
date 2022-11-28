const popup = document.querySelector('.popup');
const popupContainer = popup.querySelector('.popup__container');
const buttonEdit = document.querySelector('.profile-info__edit');
const buttonSave = document.querySelector('.form__save');
const buttonClose = popup.querySelector('.popup__close');
const formElement = document.querySelector('.form');
let nameInput = formElement.querySelector('.form__input_data_name');
let jobInput = formElement.querySelector('.form__input_data_job');
let nameForm = document.querySelector('.profile-info__title');
let jobForm = document.querySelector('.profile-info__subtitle');

let openPopup = () => {
  nameInput.value = nameForm.textContent;
  jobInput.value = jobForm.textContent;
  popup.classList.add('popup_opened');
};
buttonEdit.addEventListener('click', openPopup);

let closePopup = () => {
  popup.classList.remove('popup_opened');
};
buttonClose.addEventListener('click', closePopup);

function formSubmitHandler(evt) {
  evt.preventDefault(evt);
  nameForm.textContent = nameInput.value;
  jobForm.textContent = jobInput.value;
  closePopup();
};
formElement.addEventListener('submit', formSubmitHandler);


popup.addEventListener('click', function (evt) {
  (evt.target === evt.currentTarget) ?
    closePopup()
    : false
});
