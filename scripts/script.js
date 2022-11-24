// мне нравится / не нравится

let btnLike = document.querySelectorAll('.element__btn-like');

for (let i = 0; i < btnLike.length; i++) {

    let addLike = () => {

        (btnLike[i].classList.contains('element__btn-like_inactive') === true) ?

        (btnLike[i].classList.remove('element__btn-like_inactive'), btnLike[i].classList.add('element__btn-like_active')) :

        (btnLike[i].classList.add('element__btn-like_inactive'), btnLike[i].classList.remove('element__btn-like_active'))

    }

    btnLike[i].addEventListener('click', addLike);

}

// открытие / закрытие формы

let popup = document.querySelector('.popup');

let btnEdit = document.querySelector('.profile-info__btn-edit');

let btnClose = document.querySelector('.form__btn-close');

let btnSave = document.querySelector('.form__btn-save');

let openPopup = () => { (btnEdit.matches(':hover') === true) ? popup.classList.add('popup_opened') : false };

let closePopup = () => { ((btnClose.matches(':hover') === true) || (btnSave.matches(':hover') === true)) ? popup.classList.remove('popup_opened') : false };

btnEdit.addEventListener('click', openPopup);

btnClose.addEventListener('click', closePopup);

btnSave.addEventListener('click', closePopup);

// заполнение профиля из формы

let formElement = document.querySelector('.form');

let nameInput = formElement.querySelector('.form__name');

let jobInput = formElement.querySelector('.form__job');

let nameForm = document.querySelector('.profile-info__title');

let jobForm = document.querySelector('.profile-info__subtitle');

function formSubmitHandler(evt) {

    evt.preventDefault();

    ((nameInput.value === '') || (jobInput.value === '')) ? alert('Please enter your name and job!') : (nameForm.textContent = nameInput.value, jobForm.textContent = jobInput.value)
}

btnSave.addEventListener('click', formSubmitHandler);



// let addLike = () => {

//     (btnLike[i].classList.contains('element__btn-like_inactive') === true) ?

//     (btnLike[i].classList.remove('element__btn-like_inactive'), btnLike[i].classList.add('element__btn-like_active')) :

//     (btnLike[i].classList.add('element__btn-like_inactive'), btnLike[i].classList.remove('element__btn-like_active'))
    
// }