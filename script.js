const editButton = document.querySelector('.profile__edit-button');
const formElement = document.querySelector('.popup__form');
const nameInput = document.querySelector('.form__input_popup_name');
const jobInput = document.querySelector('.form__input_popup_about');
const pofileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about-me');
const addButton = document.querySelector('.profile__add-button');
const popupClose = document.querySelectorAll('.form__button_close');
//const popup = document.querySelectorAll('.popup');
const popupOpenedImg = document.querySelector('.popup_opened_image');
const popupOpenedCard = document.querySelector('.popup_opened_card');
const popupOpenedProfile = document.querySelector('.popup_opened_profile');
const formElementCard = document.querySelector('.form_card');
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

//Создание карточек
function createCard({ name, link }) {
  const newElement = elementsTemplate.cloneNode(true);
  const elementImg = newElement.querySelector('.elements__mask-group')
  newElement.querySelector('.elements__text').textContent = name;
  elementImg.src = link;
  elementImg.alt = name;
  elementImg.addEventListener('click', function (evt) {
    evt.target.closest('.elements__rectangle');
    openPopupImg({ name, link });
  });
  newElement.querySelector('.elements__delete').addEventListener('click', function (evt) {
    evt.target.closest('.elements__rectangle').remove();
  });
  newElement.querySelector('.elements__like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('elements__like_active');
  });
  return newElement;
}

//Вставка в разметку в качестве параметра принимает новый элемент
function insertIntoMarkup(newElement) {
  elementsContainer.prepend(newElement);
}

//начальная инициализация карточек
initialCards.forEach(function (newCard) {
  insertIntoMarkup(createCard(newCard));
});

//добавление карточки
function addElements(evt) {
  evt.preventDefault();
  name = designationInput.value
  link = pictureInput.value
  insertIntoMarkup(createCard({ name, link }));
  designationInput.value = '';
  pictureInput.value = '';
  closePopup(popupOpenedCard)
}
formElementCard.addEventListener('submit', addElements);

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
    }////закрыть попапа по нажатию на клавишу Esc.
  });
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

popupClose.forEach(button => {
  button.addEventListener('click', function (e) {
    closePopup(e.target.closest('.popup'));
  })
});

//редактирование форм
function submitHandlerForm(evt) {
  evt.preventDefault();
  pofileName.textContent = nameInput.value
  profileAbout.textContent = jobInput.value
  closePopup(popupOpenedProfile);
}
formElement.addEventListener('submit', submitHandlerForm);


//валидация форм

const showInputError = (forms, inputElement, errorMessage) => {
  const errorElement = forms.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add('form__input_type_error');
  errorElement.textContent = errorMessage;
  errorElement.classList.add('form__input-error_active');
};

const hideInputError = (forms, inputElement) => {
  const errorElement = forms.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove('form__input_type_error');
  errorElement.classList.remove('form__input-error_active');
  errorElement.textContent = '';
};

const checkInputValidity = (forms, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(forms, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(forms, inputElement);
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  })
};

const toggleButton = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.setAttribute('disabled', true);
    buttonElement.classList.add('form__button_disabled');
  } else {
    buttonElement.removeAttribute('disabled');
    buttonElement.classList.remove('form__button_disabled');
  }
};

const setEventListeners = (forms) => {
  const inputList = Array.from(forms.querySelectorAll('.form__input'));
  const buttonElement = forms.querySelector('.form__button_popup_save');
  toggleButton(inputList, buttonElement);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(forms, inputElement);
      toggleButton(inputList, buttonElement);
    });
  });
};

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll('.form'));
  formList.forEach((forms) => {
    forms.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    setEventListeners(forms);
  });
};
enableValidation();


