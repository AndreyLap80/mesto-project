//валидация форм

function buttonDisabled(btn) {
  btn.setAttribute('disabled', true);
  btn.classList.add('form__button_disabled')
}

const showInputError = (forms, inputElement, errorMessage, param) => {
  const errorElement = forms.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(param.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(param.errorClass);
};

const hideInputError = (forms, inputElement, param) => {
  const errorElement = forms.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(param.inputErrorClass);
  errorElement.classList.remove(param.errorClass);
  errorElement.textContent = '';
};

const inputValidity = (forms, inputElement, param) => {
  if (!inputElement.validity.valid) {
    showInputError(forms, inputElement, inputElement.validationMessage, param);
  } else {
    hideInputError(forms, inputElement, param);
  }
};

const invalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  })
};

const toggleButton = (inputList, buttonElement, param) => {
  if (invalidInput(inputList)) {
    buttonElement.setAttribute('disabled', true);
    buttonElement.classList.add(param.inactiveButtonClass);
  } else {
    buttonElement.removeAttribute('disabled');
    buttonElement.classList.remove(param.inactiveButtonClass);
  }
};

const setEventListeners = (forms, param) => {
  const inputList = Array.from(forms.querySelectorAll(param.inputSelector));
  const buttonElement = forms.querySelector(param.submitButtonSelector);
  toggleButton(inputList, buttonElement, param);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      inputValidity(forms, inputElement, param);
      toggleButton(inputList, buttonElement, param);
    });
  });
};

const enableValidation = (param) => {
  const formList = document.querySelectorAll(param.formSelector);
  formList.forEach((forms) => {
    forms.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    setEventListeners(forms, param);
  });
};
export { buttonDisabled, showInputError, hideInputError, inputValidity, invalidInput, toggleButton, setEventListeners, enableValidation }
