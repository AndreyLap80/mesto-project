import '../pages/index.css';
import { linkAvatar, formElementCard, formCardDelete, formAvatar, elementsContainer, designationInput, pictureInput, elementsTemplate, pofileAvatar, createCard, insertIntoMarkup, submitAvatarForm, submitCardDelete, addElements } from './card.js'
import { renderLoading, editButton, avatarEditButton, formElement, nameInput, jobInput, pofileName, profileAbout, addButton, popupClose, popupOpenedImg, popupOpenedCard, popupOpenedProfile, popupOpenedAvatar, openPopupAll, popupImg, popupText, openPopupImg, openPopup, closePopup, submitHandlerForm, popupOpenedCardDelete } from './modal.js'
import { showInputError, hideInputError, inputValidity, invalidInput, toggleButton, setEventListeners, enableValidation } from './validate.js';
import { initialCards, meInfo, deleteCards, newCards, likesDeleteFetch, editingProfile, likesFetch, editAvatar } from './api.js';
export const meID = {};
export const cardInfo = {};


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
  insertIntoMarkup(createCard(newCard));
  cardInfo.info = card
})
).catch((err) => {
  console.log(err);
});
//начальная инициализация карточек


formElementCard.addEventListener('submit', function (evt) {
  evt.preventDefault();
  renderLoading(true)
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
    addElements(newCard)
    this.reset();
  }).catch((err) => {
    console.log(err);
  })
    .finally(() => {
      renderLoading(false)
    });
}, toggleButton);


//лайк
export function getLikes(id, elementLikes, elementLikesCounter) {
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

formAvatar.addEventListener('submit', function (evt) {
  evt.preventDefault();
  renderLoading(true)
  editAvatar(
    linkAvatar.value
  ).then((res) => {
    const newAvatar = res.avatar
    submitAvatarForm(newAvatar)
    this.reset();
  }).catch((err) => {
    console.log(err);
  })
    .finally(() => {
      renderLoading(false)
    });
}, toggleButton);

formCardDelete.addEventListener('submit', function submitCardDelete(evt) {
  evt.preventDefault();
  deleteCards(evt.target.id)
  closePopup(popupOpenedCardDelete);
});

editButton.addEventListener('click', function () {
  nameInput.value = pofileName.textContent;
  jobInput.value = profileAbout.textContent;
  openPopup(popupOpenedProfile);
});


addButton.addEventListener('click', function () {
  const buttonPopupSave = document.querySelectorAll('.form__button_popup_save');
  buttonPopupSave.forEach((buttonDisabled) => {
    buttonDisabled.setAttribute('disabled', true);
    buttonDisabled.classList.add('form__button_disabled')
  });
  openPopup(popupOpenedCard);
});
avatarEditButton.addEventListener('click', function () {
  const buttonPopupSave = document.querySelectorAll('.form__button_popup_save');
  buttonPopupSave.forEach((buttonDisabled) => {
    buttonDisabled.setAttribute('disabled', true);
    buttonDisabled.classList.add('form__button_disabled')
  });
  openPopup(popupOpenedAvatar);
});

popupClose.forEach(button => {
  button.addEventListener('click', function (e) {
    closePopup(e.target.closest('.popup'));
  })
});

formElement.addEventListener('submit', function (evt) {
  evt.preventDefault();
  renderLoading(true)
  editingProfile({
    name: nameInput.value,
    about: jobInput.value
  }).then((res) => {
    const profile = {
      name: res.name,
      about: res.about,
    }
    submitHandlerForm(profile)
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

