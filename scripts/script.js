let btnLike = document.querySelectorAll('.element__btn-like');

for (let i = 0; i < btnLike.length; i++) {

    function addLike() {

        if (btnLike[i].classList.contains('element__btn-like_inactive') === true) {

            btnLike[i].classList.remove('element__btn-like_inactive');

            btnLike[i].classList.add('element__btn-like_active');

        } else {

            btnLike[i].classList.add('element__btn-like_inactive');

            btnLike[i].classList.remove('element__btn-like_active');

        }

    }

    btnLike[i].addEventListener('click', addLike);

}

// Находим форму в DOM
// let formElement = // Воспользуйтесь методом querySelector()
// Находим поля формы в DOM
// let nameInput = // Воспользуйтесь инструментом .querySelector()
// let jobInput = // Воспользуйтесь инструментом .querySelector()

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
// function formSubmitHandler (evt) {
//     evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.

    // Получите значение полей jobInput и nameInput из свойства value

    // Выберите элементы, куда должны быть вставлены значения полей

    // Вставьте новые значения с помощью textContent
// }

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
// formElement.addEventListener('submit', formSubmitHandler); 