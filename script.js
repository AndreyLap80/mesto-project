let editButton = document.querySelector('.profile__edit-button');
let addButton = document.querySelector('.profile__add-button');
let popupClose = document.querySelector('.form__button_popup_close');
let popupClosecard = document.querySelector('.form__button_popup_close-card');

function popupClosed() {
  let popupOpenedcard = document.querySelector('.popup_opened_card');
  let popupOpenedprofile = document.querySelector('.popup_opened_profile');
  popupOpenedcard.setAttribute('style', 'display: none');
  popupOpenedprofile.setAttribute('style', 'display: none');
}
popupClose.addEventListener('click', popupClosed);
popupClosecard.addEventListener('click', popupClosed);

function openPopupprofile() {
  let popupOpenedprofile = document.querySelector('.popup_opened_profile');
  popupOpenedprofile.setAttribute('style', 'display: flex');
}
editButton.addEventListener('click', openPopupprofile);

function popupOpenedcard() {
  let popupOpenedcard = document.querySelector('.popup_opened_card');
  popupOpenedcard.setAttribute('style', 'display: flex');

}
addButton.addEventListener('click', popupOpenedcard);

const formElement = document.querySelector('.popup__form');
const nameInput = document.querySelector('.form__input_popup_name');
const jobInput = document.querySelector('.form__input_popup_about');
let profileInfo = document.querySelector('.profile__info');

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileInfo.innerHTML = `<div class="profile__info">
  <h1 class="profile__name">${nameInput.value}</h1>
  <p class="profile__about-me">${jobInput.value}</p>
  </div>`;

  popupClosed()
}
formElement.addEventListener('submit', formSubmitHandler);




