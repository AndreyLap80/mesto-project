const editButton = document.querySelector('.profile__edit-button');
const formElement = document.querySelector('.popup__form');
const nameInput = document.querySelector('.form__input_popup_name');
const jobInput = document.querySelector('.form__input_popup_about');
const pofileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about-me');
const profileInfo = document.querySelector('.profile__info');
const addButton = document.querySelector('.profile__add-button');
const popupClose = document.querySelector('.form__button_popup_close');
const popupCloseCard = document.querySelector('.form__button_popup_close-card');
const popupCloseImg = document.querySelector('.form__button_popup_close-image');
const popupOpenedImg = document.querySelector('.popup_opened_image');
const popupOpenedCard = document.querySelector('.popup_opened_card');
const popupOpenedProfile = document.querySelector('.popup_opened_profile');
const elementsDelete = document.querySelector('.elements__delete');
const elementsImg = document.querySelector('.elements__mask-group');
const formElementCard = document.querySelector('.form_card');
const saveElements = document.querySelector('.form__button_popup_save');
const elementsContainer = document.querySelector('.elements');
const popupImg = document.querySelector('.popup__image');
const popupText = document.querySelector('.popup__text')
const designationInput = document.querySelector('.form__input_popup_designation');
const pictureInput = document.querySelector('.form__input_popup_link-picture');
const elementsTemplate = document.querySelector('#elements-template').content;
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

//загрузка карточек
const elementsCard = function ({ name, link }) {
  const newElement = elementsTemplate.cloneNode(true);
  const elementsImg = document.querySelector('.elements__mask-group');
  newElement.querySelector('.elements__text').textContent = name;
  newElement.querySelector('.elements__mask-group').src = link;
  newElement.querySelector('.elements__mask-group').addEventListener('click', function (evt) {
    evt.target.closest('.elements__rectangle');
    openPopupImg({ name, link });
  });
  newElement.querySelector('.elements__delete').addEventListener('click', function (evt) {
    evt.target.closest('.elements__rectangle').remove();
  });
  newElement.querySelector('.elements__like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('elements__like_active');
  });
  elementsContainer.prepend(newElement);
};
initialCards.forEach(elementsCard);

function openPopupImg({ name, link }) {
  popupImg.src = link;
  popupText.textContent = name;
  popupImg.alt = name;
  openPopup(popupOpenedImg);
}

function openPopup(popupElement) {
  popupElement.classList.add('popup_opened');
}

editButton.addEventListener('click', function () {
  nameInput.value = pofileName.textContent;
  jobInput.value = profileAbout.textContent;
  openPopup(popupOpenedProfile);
});
addButton.addEventListener('click', function () {
  openPopup(popupOpenedCard);
});

function closePopup(popupElement) {
  popupElement.classList.remove('popup_opened');
}
popupCloseImg.addEventListener('click', function () {
  closePopup(popupOpenedImg);
});
popupClose.addEventListener('click', function () {
  closePopup(popupOpenedProfile);
});
popupCloseCard.addEventListener('click', function () {
  closePopup(popupOpenedCard);
});
//добавление карточки

function addElements(evt) {
  evt.preventDefault();
  name = designationInput.value
  link = pictureInput.value
  elementsCard({ name, link })
  designationInput.value = '';
  pictureInput.value = '';
  closePopup(popupOpenedCard)
}
formElementCard.addEventListener('submit', addElements);

//редактирование форм
function submitHandlerForm(evt) {
  evt.preventDefault();
  pofileName.textContent = nameInput.value
  profileAbout.textContent = jobInput.value
  closePopup(popupOpenedProfile);
}
formElement.addEventListener('submit', submitHandlerForm);





