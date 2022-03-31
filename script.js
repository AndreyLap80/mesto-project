const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const popupClose = document.querySelector('.form__button_popup_close');
const popupClosecard = document.querySelector('.form__button_popup_close-card');

//функции работы с попапом
function popupClosed() {
  const popupOpenedcard = document.querySelector('.popup_opened_card');
  const popupOpenedprofile = document.querySelector('.popup_opened_profile');
  popupOpenedcard.setAttribute('style', 'display: none');
  popupOpenedprofile.setAttribute('style', 'display: none');
}
popupClose.addEventListener('click', popupClosed);
popupClosecard.addEventListener('click', popupClosed);

function openPopupprofile() {
  const popupOpenedprofile = document.querySelector('.popup_opened_profile');
  popupOpenedprofile.setAttribute('style', 'display: flex');
}
editButton.addEventListener('click', openPopupprofile);

function popupOpenedcard() {
  const popupOpenedcard = document.querySelector('.popup_opened_card');
  popupOpenedcard.setAttribute('style', 'display: flex');

}
addButton.addEventListener('click', popupOpenedcard);

//редактирование форм
const formElement = document.querySelector('.popup__form');
const nameInput = document.querySelector('.form__input_popup_name');
const jobInput = document.querySelector('.form__input_popup_about');
const profileInfo = document.querySelector('.profile__info');

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileInfo.innerHTML = `<div class="profile__info">
  <h1 class="profile__name">${nameInput.value}</h1>
  <p class="profile__about-me">${jobInput.value}</p>
  </div>`;

  popupClosed()
}
formElement.addEventListener('submit', formSubmitHandler);

//добавление карточки

const elementsContainer = document.querySelector('.elements');
const saveElements = document.querySelector('.form__button_popup_save');

function addElements(designationValue, pictureValue) {
  const elementsTemplate = document.querySelector('#elements-template').content;
  const newElement = elementsTemplate.querySelector('.elements__rectangle').cloneNode(true);

  newElement.querySelector('.elements__text').textContent = designationValue;
  newElement.querySelector('.elements__mask-group').textContent = pictureValue;
  newElement.querySelector('.elements__like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('elements__like_active');
  });
  elementsContainer.append(newElement);
}
saveElements.addEventListener('submit', function () {
  const designationInput = document.querySelector('.form__input_popup_designation');
  const pictureInput = document.querySelector('.form__input_popup_link-picture');

  addElements(designationInput.value, pictureInput.value);

  designationInput.value = '';
  pictureInput.value = '';
});





