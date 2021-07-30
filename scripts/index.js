const editButton = document.querySelector('.profile__edit-button');
const closeButton = document.querySelectorAll('.popup__close-button');
const popup = document.querySelectorAll('.popup');
const cardsContainer = document.querySelector('.elements__list');
const newCardName = document.querySelector('.popup__input_type_card-name');
const newCardImage = document.querySelector('.popup__input_type_card-image');
const cardForm = document.querySelector('.popup__form_new-item');
const profileForm = document.querySelector('.popup__form_profile');
const nameInput = document.querySelector(".popup__input_type_name");
const jobInput = document.querySelector(".popup__input_type_rank");
const profileHeader = document.querySelector('.profile__header');
const profileRank = document.querySelector('.profile__rank');
const addButton = document.querySelector('.profile__add-button');

const profilePopup = document.querySelector('.popup_type_edit');
const newCardPopup = document.querySelector('.popup_type_new-card');
const imagePopup = document.querySelector('.popup_type_image');

function openPopup(popup) {
  popup.classList.add('popup_opened');
}
addButton.addEventListener('click', () => openPopup(newCardPopup))

function openProfilePopup() {
  openPopup(profilePopup);
  nameInput.value = profileHeader.textContent;
  jobInput.value = profileRank.textContent;
  
}
editButton.addEventListener('click', openProfilePopup)

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

const closeButtonList = document.querySelectorAll('.popup__close-button');
closeButtonList.forEach((closeButton) => {
  const popup = closeButton.closest('.popup');
  closeButton.addEventListener('click', function() {
    closePopup(popup);
  });
}); 

function submitFormProfile (evt) {
    evt.preventDefault();
    profileHeader.textContent = nameInput.value;
    profileRank.textContent = jobInput.value;
    closePopup(profilePopup);
}
profileForm.addEventListener('submit', submitFormProfile);

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

const cardTemplate = document.querySelector('#initialCard');

function createCard(element) {
  const card = cardTemplate.content.cloneNode(true);

  card.querySelector('.element__image').src = element.link;
  card.querySelector('.element__header').textContent = element.name;
  
  card.querySelector('.element__like-button').addEventListener('click', function (evt) {
      evt.target.classList.toggle('element__like-button_active');
    })

  card.querySelector('.element__cart-button').addEventListener('click', function (evt) {
      evt.target.closest('.element').remove();
    })

  card.querySelector('.element__image').addEventListener('click', (e) => {
      imagePopup.querySelector('.popup__full-image').src =
        e.target.closest('.element__image').src;
      imagePopup.querySelector('.popup__image-description').textContent =
        e.target.closest('.element__image').parentNode.textContent;
      openPopup(imagePopup);
    });

  return card;

  }

function renderCard(card) {
    cardsContainer.prepend(card);
}

initialCards.forEach((element) => {
  renderCard(createCard(element));
});

function formSubmitAddCardHandler (evt) {
  evt.preventDefault();
  renderCard(createCard({name: newCardName.value, link: newCardImage.value}));
  closePopup(newCardPopup);
}

cardForm.addEventListener('submit', formSubmitAddCardHandler);