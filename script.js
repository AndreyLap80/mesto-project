const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const popupClose = document.querySelector('.form__button_popup_close');
const popupClosecard = document.querySelector('.form__button_popup_close-card');
const elementsDelete = document.querySelector('.elements__delete');
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

//функции работы с попапом
function popupClosed() {
  const popupOpenedcard = document.querySelector('.popup_opened_card');
  const popupOpenedprofile = document.querySelector('.popup_opened_profile');
  popupOpenedcard.setAttribute('style', 'display: none');
  popupOpenedprofile.setAttribute('style', 'display: none');
}
popupClose.addEventListener('click', popupClosed);
popupClosecard.addEventListener('click', popupClosed);
addButton.addEventListener('click', popupOpenedcard);
function openPopupprofile() {
  const popupOpenedprofile = document.querySelector('.popup_opened_profile');
  popupOpenedprofile.setAttribute('style', 'display: flex');
}
editButton.addEventListener('click', openPopupprofile);

function popupOpenedcard() {
  const popupOpenedcard = document.querySelector('.popup_opened_card');
  popupOpenedcard.setAttribute('style', 'display: flex');

}


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
const formElementCard = document.querySelector('.popup__form_card');
const elementsContainer = document.querySelector('.elements');
const saveElements = document.querySelector('.form__button_popup_save');

function addElements(designationValue, pictureValue) {
  const elementsTemplate = document.querySelector('#elements-template').content;
  const newElement = elementsTemplate.querySelector('.elements__rectangle').cloneNode(true);

  newElement.querySelector('.elements__text').textContent = designationValue;
  newElement.querySelector('.elements__mask-group').src = pictureValue;
  newElement.querySelector('.elements__delete').addEventListener('click', function (evt) {
    const element = evt.target.closest('.elements__rectangle').remove();
  });
  newElement.querySelector('.elements__like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('elements__like_active');
  });
  elementsContainer.prepend(newElement);
  popupClosed()
}
formElementCard.addEventListener('submit', function () {
  const designationInput = document.querySelector('.form__input_popup_designation');
  const pictureInput = document.querySelector('.form__input_popup_link-picture');

  addElements(designationInput.value, pictureInput.value);

  designationInput.value = '';
  pictureInput.value = '';
});

elementsDelete.addEventListener('click', function (evt) {
  const element = evt.target.closest('.elements__rectangle').remove();
});


