import { } from './api.js';
const editButton = document.querySelector('.profile__edit-button');
const avatarEditButton = document.querySelector('.profile__avatar-edit-button');
const formElement = document.querySelector('.popup__form');
const nameInput = document.querySelector('.form__input_popup_name');
const jobInput = document.querySelector('.form__input_popup_about');
const pofileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about-me');
const addButton = document.querySelector('.profile__add-button');
const popupClose = document.querySelectorAll('.form__button_close');
const saveBtn = document.querySelectorAll('.form__button_popup_save');
const popupOpenedImg = document.querySelector('.popup_opened_image');
const popupOpenedCardDelete = document.querySelector('.popup_opened_card-delete');
const popupOpenedCard = document.querySelector('.popup_opened_card');
const popupOpenedProfile = document.querySelector('.popup_opened_profile');
const popupOpenedAvatar = document.querySelector('.popup_opened_avatar');
const popupImg = document.querySelector('.popup__image');
const popupText = document.querySelector('.popup__text')

function renderLoading(isLoading) {
  if (isLoading) {
    saveBtn.forEach((btn) => {
      btn.textContent = 'Сохранение...';
    })
  }
}


function openPopupImg({ name, link }) {
  popupImg.src = link;
  popupText.textContent = name;
  popupImg.alt = name;
  openPopup(popupOpenedImg);
}

function openPopup(popupElement, _id) {
  popupElement.classList.add('popup_opened')
  document.querySelector('.form_card-delete').id = _id; //открыть попапа
  document.addEventListener('mousedown', overlayClose)  //слушатель по клику на оверлей.
  document.addEventListener('keydown', escClose)//слушатель по нажатию на клавишу Esc.
}

function overlayClose(event) {
  if (!event.target.closest('.popup__container,.popup__container-image')) {
    closePopup(event.target.closest('.popup'));
  } //закрыть попапа по клику на оверлей
};

function escClose(event) {
  if (event.key === "Escape") {
    const popupActive = document.querySelector('.popup.popup_opened');
    if (popupActive) {
      closePopup(popupActive);
    }
  }//закрыть попапа по нажатию на клавишу Esc.
};


function closePopup(popupElement) {
  popupElement.classList.remove('popup_opened');
  document.removeEventListener('mousedown', overlayClose)
  document.removeEventListener('keydown', escClose)
}
//редактировать профиль
function submitHandlerForm(profile) {
  pofileName.textContent = profile.name
  profileAbout.textContent = profile.about
  closePopup(popupOpenedProfile);
}

export { renderLoading, popupOpenedCardDelete, editButton, avatarEditButton, formElement, nameInput, jobInput, pofileName, profileAbout, addButton, popupClose, popupOpenedImg, popupOpenedCard, popupOpenedProfile, popupOpenedAvatar, popupImg, popupText, openPopupImg, openPopup, closePopup, submitHandlerForm }
