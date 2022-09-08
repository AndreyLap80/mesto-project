import { popupOpenedCard, openPopupImg, openPopup, closePopup, popupOpenedAvatar, popupOpenedCardDelete } from './modal.js'
import { meID, getLikes } from './index.js'
const formElementCard = document.querySelector('.form_card');
const formAvatar = document.querySelector('.avatar__form');
const formCardDelete = document.querySelector('.form_card-delete');
const linkAvatar = document.querySelector('.form__input_popup_link-avatar');
const pofileAvatar = document.querySelector('.profile__avatar');
const elementsContainer = document.querySelector('.elements');
const designationInput = document.querySelector('.form__input_popup_designation');
const pictureInput = document.querySelector('.form__input_popup_link-picture');
const elementsTemplate = document.querySelector('#elements-template').content;

function createCard({ name, link, likes, owner, _id }) {
  const newElement = elementsTemplate.cloneNode(true);
  const elementImg = newElement.querySelector('.elements__mask-group')
  const elementDelete = newElement.querySelector('.elements__delete')
  const elementLikes = newElement.querySelector('.elements__like')
  const elementLikesCounter = newElement.querySelector('.elements__like-counter')

  newElement.querySelector('.elements__text').textContent = name;
  elementDelete.id = _id;
  elementLikes.id = _id;
  elementImg.src = link;
  elementImg.alt = name;
  elementLikesCounter.textContent = likes.length
  elementImg.addEventListener('click', function (evt) {
    evt.target.closest('.elements__rectangle');
    openPopupImg({ name, link });
  });

  elementDelete.addEventListener('click', function (evt) {
    evt.target.closest('.elements__rectangle');
    openPopup(popupOpenedCardDelete, evt.target.id);
  });

  elementLikes.addEventListener('click', function (evt) {
    evt.target.closest('.elements__like');
    getLikes(evt.target.id, elementLikes, elementLikesCounter)
    elementLikes.classList.toggle('elements__like_active')
  });

  likes.forEach(сard => {
    const likeID = {
      _id: сard._id
    }
    if (meID.id._id === likeID._id) {
      elementLikes.classList.add('elements__like_active')
    }
    else {
      elementLikes.classList.remove('elements__like_active')
    }
  })

  if (owner === meID.id._id) {
    elementDelete.style.display = 'block'
  }


  return newElement;
}

//Вставка в разметку в качестве параметра принимает новый элемент
function insertIntoMarkup(newElement) {
  elementsContainer.prepend(newElement);
}

//добавление карточки
function addElements(newCard) {
  elementsContainer.prepend(createCard(newCard));
  closePopup(popupOpenedCard)
}
//аватар
function submitAvatarForm(newAvatar) {
  pofileAvatar.src = newAvatar
  closePopup(popupOpenedAvatar);
}

export { linkAvatar, formElementCard, formCardDelete, formAvatar, elementsContainer, designationInput, pictureInput, elementsTemplate, pofileAvatar, createCard, insertIntoMarkup, submitAvatarForm, addElements }
