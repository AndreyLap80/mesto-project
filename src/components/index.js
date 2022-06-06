import { formElementCard, elementsContainer, designationInput, pictureInput, elementsTemplate, initialCards, createCard, insertIntoMarkup, addElements } from './card.js'
import { editButton, formElement, nameInput, jobInput, pofileName, profileAbout, addButton, popupClose, popupOpenedImg, popupOpenedCard, popupOpenedProfile, popupImg, popupText, openPopupImg, openPopup, closePopup, submitHandlerForm } from './modal.js'
import { showInputError, hideInputError, inputValidity, invalidInput, toggleButton, setEventListeners, enableValidation } from './validate.js';

//начальная инициализация карточек
initialCards.forEach(function (newCard) {
  insertIntoMarkup(createCard(newCard));
});
formElementCard.addEventListener('submit', addElements);

editButton.addEventListener('click', function () {
  nameInput.value = pofileName.textContent;
  jobInput.value = profileAbout.textContent;
  openPopup(popupOpenedProfile);
});
addButton.addEventListener('click', function () {
  openPopup(popupOpenedCard);
});

popupClose.forEach(button => {
  button.addEventListener('click', function (e) {
    closePopup(e.target.closest('.popup'));
  })
});

formElement.addEventListener('submit', submitHandlerForm);

enableValidation({
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__button_popup_save',
  inactiveButtonClass: 'form__button_disabled',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_active'
});
