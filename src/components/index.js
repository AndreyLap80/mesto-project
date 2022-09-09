import '../pages/index.css';
import { createCard, insertIntoMarkup, addElements } from './card.js'
import { profileAbout, pofileName, pofileAvatar, popupOpenedAvatar, popupOpenedCard, popupOpenedCardDelete, addButton, popupClose, nameInput, jobInput, formElement, editButton, avatarEditButton, formElementCard, formAvatar, formCardDelete, linkAvatar, designationInput, pictureInput, } from './constants.js'
import { renderLoading, popupOpenedProfile, openPopup, closePopup, submitHandlerForm, } from './modal.js'
import { toggleButton, enableValidation } from './validate.js';
import { initialCards, meInfo, deleteCards, newCards, likesDeleteFetch, editingProfile, likesFetch, editAvatar } from './api.js';
const meID = {};
const cardInfo = {};
//начальная инициализация карточек

meInfo().then((data) => {
  pofileAvatar.src = data.avatar;
  pofileName.textContent = data.name
  profileAbout.textContent = data.about
  meID.id = data
}).catch((err) => {
  console.log(err);
});

initialCards().then(res => res.forEach(card => {
  const newCard = {
    name: card.name,
    link: card.link,
    likes: card.likes,
    owner: card.owner._id,
    _id: card._id
  }
  insertIntoMarkup(createCard(newCard, getLikes, meID));
  cardInfo.info = res
})
).catch((err) => {
  console.log(err);
});
//начальная инициализация карточек


formElementCard.addEventListener('submit', function (evt) {
  evt.preventDefault();
  renderLoading(true, evt.submitter)
  newCards({
    name: designationInput.value,
    link: pictureInput.value
  }).then((res) => {
    const newCard = {
      name: res.name,
      link: res.link,
      likes: res.likes,
      owner: res.owner._id,
      _id: res._id
    }
    addElements(newCard, getLikes, meID)
    this.reset();
  }).catch((err) => {
    console.log(err);
  })
    .finally(() => {
      renderLoading(false)
    });
}, toggleButton);


//лайк
function getLikes(id, elementLikes, elementLikesCounter) {
  if (elementLikes.classList.contains('elements__like_active')) {
    likesDeleteFetch(id).then((res) => {
      elementLikesCounter.textContent = res.likes.length
    }).catch((err) => {
      console.log(err);
    });
  }
  else if (!elementLikes.classList.contains("elements__like_active")) {
    likesFetch(id).then((res) => {
      elementLikesCounter.textContent = res.likes.length
    }).catch((err) => {
      console.log(err);
    });
  }
}

//аватар
formAvatar.addEventListener('submit', function (evt) {
  evt.preventDefault();
  renderLoading(true, evt.submitter)
  editAvatar(
    linkAvatar.value
  ).then((res) => {
    pofileAvatar.src = res.avatar
    closePopup(popupOpenedAvatar);
    this.reset();
  }).catch((err) => {
    console.log(err);
  })
    .finally(() => {
      renderLoading(false)
    });
}, toggleButton);

//удаление карточки
export function deleteCard(id) {
  deleteCards(id).then(() => {
    document.getElementById(id).remove()
    closePopup(popupOpenedCardDelete);
  })
    .catch((err) => {
      console.log(err);
    })

}
editButton.addEventListener('click', function () {
  nameInput.value = pofileName.textContent;
  jobInput.value = profileAbout.textContent;
  openPopup(popupOpenedProfile);
});

addButton.addEventListener('click', () => openPopup(popupOpenedCard))
avatarEditButton.addEventListener('click', () => openPopup(popupOpenedAvatar))


popupClose.forEach(button => {
  button.addEventListener('click', function (e) {
    closePopup(e.target.closest('.popup'));
  })
});

//редактировать профиль

formElement.addEventListener('submit', function (evt) {
  evt.preventDefault();
  renderLoading(true, evt.submitter)
  editingProfile({
    name: nameInput.value,
    about: jobInput.value
  }).then((res) => {
    pofileName.textContent = res.name,
      profileAbout.textContent = res.about
    closePopup(popupOpenedProfile);
  })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      renderLoading(false)
    });
}
);

enableValidation({
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__button_popup_save',
  inactiveButtonClass: 'form__button_disabled',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_active'
});

