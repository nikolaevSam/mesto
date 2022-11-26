const popup = document.querySelector('.popup');

const buttonEdit = document.querySelector('.profile-info__edit');

const buttonSave = document.querySelector('.form__save');

const buttonClose = popup.querySelector('.popup__close');

const formElement = document.querySelector('.form');

let nameForm = document.querySelector('.profile-info__title');

let jobForm = document.querySelector('.profile-info__subtitle');

let nameInput = formElement.querySelector('.form__name');

let jobInput = formElement.querySelector('.form__job');

nameInput.value = nameForm.textContent;

jobInput.value = jobForm.textContent;


let openPopup = () => { (buttonEdit.matches(':hover') === true) ? popup.classList.add('popup_opened') : false };

let closePopup = (event) => { ((buttonClose.matches(':hover') === true) || (buttonSave.matches(':hover') === true)) ? popup.classList.remove('popup_opened') : false };

function formSubmitHandler(evt) {

    evt.preventDefault();

    ((nameInput.value === '') || (jobInput.value === '')) ? alert('Please enter your name and job!') : (nameForm.textContent = nameInput.value, jobForm.textContent = jobInput.value)
}

buttonSave.addEventListener('click', formSubmitHandler);

buttonEdit.addEventListener('click', openPopup);

buttonClose.addEventListener('click', closePopup);

buttonSave.addEventListener('click', closePopup);
