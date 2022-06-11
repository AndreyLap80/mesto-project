
const editButton = document.querySelector('.profile__edit-button');
const formElement = document.querySelector('.popup__form');
const nameInput = document.querySelector('.form__input_popup_name');
const jobInput = document.querySelector('.form__input_popup_about');
const pofileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about-me');
const addButton = document.querySelector('.profile__add-button');
const popupClose = document.querySelectorAll('.form__button_close');
const popupOpenedImg = document.querySelector('.popup_opened_image');
const popupOpenedCard = document.querySelector('.popup_opened_card');
const popupOpenedProfile = document.querySelector('.popup_opened_profile');
const popupImg = document.querySelector('.popup__image');
const popupText = document.querySelector('.popup__text')

function openPopupImg({ name, link }) {
  popupImg.src = link;
  popupText.textContent = name;
  popupImg.alt = name;
  openPopup(popupOpenedImg);
}

function openPopup(popupElement) {
  popupElement.classList.add('popup_opened'); //открыть попапа
  popupElement.addEventListener("click", function (e) {
    if (!e.target.closest('.popup__container,.popup__container-image')) {
      closePopup(e.target.closest('.popup'));
    } //закрыть попапа по клику на оверлей
  })
  document.addEventListener('keydown', function (event) {
    if (event.key === "Escape") {
      const popupActive = document.querySelector('.popup.popup_opened');
      if (popupActive) {
        closePopup(popupActive);
      }
    }//закрыть попапа по нажатию на клавишу Esc.
  });
}

function closePopup(popupElement) {
  popupElement.classList.remove('popup_opened');
}

function submitHandlerForm(evt) {
  evt.preventDefault();
  pofileName.textContent = nameInput.value
  profileAbout.textContent = jobInput.value
  closePopup(popupOpenedProfile);
}

export { editButton, formElement, nameInput, jobInput, pofileName, profileAbout, addButton, popupClose, popupOpenedImg, popupOpenedCard, popupOpenedProfile, popupImg, popupText, openPopupImg, openPopup, closePopup, submitHandlerForm }
