import { openPopupImg, openPopup, closePopup, } from './modal.js'
import { popupOpenedCard, popupOpenedCardDelete, } from './constants.js'
import { deleteCard } from './index.js';

const elementsContainer = document.querySelector('.elements');
const elementsTemplate = document.querySelector('#elements-template').content;

function createCard({ name, link, likes, owner, _id }, getLikes, meID) {
  const newElement = elementsTemplate.cloneNode(true);
  const elementImg = newElement.querySelector('.elements__mask-group')
  const elementDelete = newElement.querySelector('.elements__delete')
  const elementLikes = newElement.querySelector('.elements__like')
  const elementLikesCounter = newElement.querySelector('.elements__like-counter')
  const elementRectangle = newElement.querySelector('.elements__rectangle')

  newElement.querySelector('.elements__text').textContent = name;
  elementRectangle.id = _id
  elementDelete.id = _id;
  elementLikes.id = _id;
  elementImg.src = link;
  elementImg.alt = name;
  elementLikesCounter.textContent = likes.length
  elementImg.addEventListener('click', function (evt) {
    openPopupImg({ name, link });
  });

  elementDelete.addEventListener('click', function (evt) {
    deleteCard(evt.target.id);
  });

  elementLikes.addEventListener('click', function (evt) {
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
function addElements(newCard, getLikes, meID) {
  elementsContainer.prepend(createCard(newCard, getLikes, meID));
  closePopup(popupOpenedCard)
}

export { createCard, insertIntoMarkup, addElements }
