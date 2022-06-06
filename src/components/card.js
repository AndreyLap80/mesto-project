import { editButton, formElement, nameInput, jobInput, pofileName, profileAbout, addButton, popupClose, popupOpenedImg, popupOpenedCard, popupOpenedProfile, popupImg, popupText, openPopupImg, openPopup, closePopup, submitHandlerForm } from './modal.js'
const formElementCard = document.querySelector('.form_card');
const elementsContainer = document.querySelector('.elements');
const designationInput = document.querySelector('.form__input_popup_designation');
const pictureInput = document.querySelector('.form__input_popup_link-picture');
const elementsTemplate = document.querySelector('#elements-template').content;

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];
function createCard({ name, link }) {
  const newElement = elementsTemplate.cloneNode(true);
  const elementImg = newElement.querySelector('.elements__mask-group')
  newElement.querySelector('.elements__text').textContent = name;
  elementImg.src = link;
  elementImg.alt = name;
  elementImg.addEventListener('click', function (evt) {
    evt.target.closest('.elements__rectangle');
    openPopupImg({ name, link });
  });
  newElement.querySelector('.elements__delete').addEventListener('click', function (evt) {
    evt.target.closest('.elements__rectangle').remove();
  });
  newElement.querySelector('.elements__like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('elements__like_active');
  });
  return newElement;
}

//Вставка в разметку в качестве параметра принимает новый элемент
function insertIntoMarkup(newElement) {
  elementsContainer.prepend(newElement);
}

//добавление карточки
function addElements(evt) {
  evt.preventDefault();
  name = designationInput.value
  link = pictureInput.value
  insertIntoMarkup(createCard({ name, link }));
  designationInput.value = '';
  pictureInput.value = '';
  closePopup(popupOpenedCard)
}


export { formElementCard, elementsContainer, designationInput, pictureInput, elementsTemplate, initialCards, createCard, insertIntoMarkup, addElements }
