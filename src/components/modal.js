const popupOpenedImg = document.querySelector('.popup_opened_image');
const popupOpenedProfile = document.querySelector('.popup_opened_profile');
const popupImg = document.querySelector('.popup__image');
const popupText = document.querySelector('.popup__text')

function renderLoading(isLoading, button, btnTextContent) {
  if (isLoading) {
    button.textContent = 'Сохранение...';
  }
  else {
    button.textContent = btnTextContent;
  }
}

function openPopupImg({ name, link }) {
  popupImg.src = link;
  popupText.textContent = name;
  popupImg.alt = name;
  openPopup(popupOpenedImg);
}

function openPopup(popupElement) {
  popupElement.classList.add('popup_opened')
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

export { renderLoading, popupOpenedImg, popupOpenedProfile, popupImg, popupText, openPopupImg, openPopup, closePopup, }
