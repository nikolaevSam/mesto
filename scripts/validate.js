function checkInputValidity(form, input, config) {
    const error = form.querySelector(`.form__${input.id}-error`);
    if (!input.validity.valid) {
        input.classList.add(config.inputErrorClass);
        error.classList.add(config.errorClass);
        error.textContent = input.validationMessage;
    } else {
        input.classList.remove(config.inputErrorClass);
        error.classList.remove(config.errorClass);
        error.textContent = '';
    }
};

function hasInvalidInput(inputs) {
    return inputs.some((inputElement) => {
        return !inputElement.validity.valid;
    })
};

function toggleButtonState(inputs, buttonElement, config) {
    if (hasInvalidInput(inputs)) {
        buttonElement.classList.add(config.submitButtonInactive);
        buttonElement.setAttribute('disabled', false);
    } else {
        buttonElement.classList.remove(config.submitButtonInactive);
        buttonElement.removeAttribute('disabled', true);
    }
};

function setEventListeners(form, config) {
    const inputs = Array.from(form.querySelectorAll(config.inputSelector));
    const buttonElement = form.querySelector(config.submitButtonSelector);
    toggleButtonState(inputs, buttonElement, config);
    inputs.forEach((input) => {
        input.addEventListener('input', (evt) => {
            checkInputValidity(form, input, config);
            toggleButtonState(inputs, buttonElement, config);
        });
    });
};

function enableValidation(config) {
    const formList = Array.from(document.querySelectorAll(config.formSelector));
    formList.forEach((form) => {
        form.addEventListener('input', (evt) => {
            evt.preventDefault();
        });
        setEventListeners(form, config);
    })
};

enableValidation(validationConfig);