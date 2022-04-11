const editButton = document.querySelector('.profile__edit-button');
const formElement = document.querySelector('.popup__form');
const nameInput = document.querySelector('.form__input_popup_name');
const jobInput = document.querySelector('.form__input_popup_about');
const profileInfo = document.querySelector('.profile__info');
const addButton = document.querySelector('.profile__add-button');
const popupClose = document.querySelector('.form__button_popup_close');
const popupClosecard = document.querySelector('.form__button_popup_close-card');
const popupCloseimg = document.querySelector('.form__button_popup_close-image');
const popupOpenedimg = document.querySelector('.popup_opened_image');
const popupOpenedcard = document.querySelector('.popup_opened_card');
const popupOpenedprofile = document.querySelector('.popup_opened_profile');
const elementsDelete = document.querySelector('.elements__delete');
const elementsimg = document.querySelector('.elements__mask-group');
const formElementCard = document.querySelector('.form_card');
const saveElements = document.querySelector('.form__button_popup_save');
const elementsContainer = document.querySelector('.elements');
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
const cardElements = function ({ name, link }) {
  const newElement = elementsTemplate.cloneNode(true);
  newElement.querySelector('.elements__text').textContent = name;
  newElement.querySelector('.elements__mask-group').src = link;
  newElement.querySelector('.elements__mask-group').addEventListener('click', function (evt) {
    evt.target.closest('.elements__rectangle');
    openPopupimg({ name, link });
  });
  newElement.querySelector('.elements__delete').addEventListener('click', function (evt) {
    evt.target.closest('.elements__rectangle').remove();
  });
  newElement.querySelector('.elements__like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('elements__like_active');
  });
  elementsContainer.prepend(newElement);
};
initialCards.forEach(cardElements);




function openPopupimg({ name, link }) {
  let popupImg = document.querySelector('.popup__image');
  let popupText = document.querySelector('.popup__text')
  popupImg.src = link;
  popupText.textContent = name;
  popupOpenedimg.classList.add('popup_opened');
}


function openPopup(popupElement) {
  popupElement.classList.add('popup_opened');
}

editButton.addEventListener('click', function () {
  openPopup(popupOpenedprofile);
});
addButton.addEventListener('click', function () {
  openPopup(popupOpenedcard);
});

function closePopup(popupElement) {
  popupElement.classList.remove('popup_opened');
}
popupCloseimg.addEventListener('click', function () {
  closePopup(popupOpenedimg);
});
popupClose.addEventListener('click', function () {
  closePopup(popupOpenedprofile);
});
popupClosecard.addEventListener('click', function () {
  closePopup(popupOpenedcard);
});
//добавление карточки

function addElements(evt) {
  evt.preventDefault();
  let designationInput = document.querySelector('.form__input_popup_designation');
  let pictureInput = document.querySelector('.form__input_popup_link-picture');
  name = designationInput.value
  link = pictureInput.value
  cardElements({ name, link })
  closePopup(popupOpenedcard)
}
formElementCard.addEventListener('submit', addElements);

//редактирование форм
function formSubmitHandler(evt) {
  evt.preventDefault();
  profileInfo.innerHTML = `<div class="profile__info">
  <h1 class="profile__name">${nameInput.value}</h1>
  <p class="profile__about-me">${jobInput.value}</p>
  </div>`;
  closePopup(popupOpenedprofile);
}
formElement.addEventListener('submit', formSubmitHandler);





