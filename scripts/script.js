const popup = document.querySelector('.popup');
const buttonEdit = document.querySelector('.profile-info__edit');
const buttonClose = popup.querySelector('.popup__close');
const formElement = document.querySelector('.form');
let nameProfile = formElement.querySelector('.form__input_data_name');
let jobProfile = formElement.querySelector('.form__input_data_job');
let nameForm = document.querySelector('.profile-info__title');
let jobForm = document.querySelector('.profile-info__subtitle');

let openPopup = () => {
  nameProfile.value = nameForm.textContent;
  jobProfile.value = jobForm.textContent;
  popup.classList.add('popup_opened');
};

let closePopup = () => {
  popup.classList.remove('popup_opened');
};

function formSubmitHandler(evt) {
  evt.preventDefault(evt);
  nameForm.textContent = nameProfile.value;
  jobForm.textContent = jobProfile.value;
  closePopup();
};

popup.addEventListener('click', function (evt) {
  (evt.target === evt.currentTarget) ?
    closePopup()
    : false
});

buttonEdit.addEventListener('click', openPopup);
buttonClose.addEventListener('click', closePopup);
formElement.addEventListener('submit', formSubmitHandler);
