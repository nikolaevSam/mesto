let elements = document.querySelector('.elements');

let element = elements.querySelector('.element');

let btnLike = element.querySelector('.element__like');


btnLike.onclick = function(event) {

    btnLike.classList.add('element__like_active');

}