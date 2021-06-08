let popupEdit = document.querySelector('.popup_type_edit');
let editButton = document.querySelector('.profile__edit-button');
let closeButton = document.querySelectorAll('.popup__close-button');
const popupWindow = document.querySelectorAll('.popup');
const cardsContainer = document.querySelector('.elements__list');
const newCardName = document.querySelector('.popup__item_type_card-name');
const newCardImage = document.querySelector('.popup__item_type_card-image');
const formItem = document.querySelector('.popup__form_new-item');
let form = document.querySelector('.popup__form_profile');
let nameInput = document.querySelector(".popup__item_type_name");
let jobInput = document.querySelector(".popup__item_type_rank");
let profileHeader = document.querySelector('.profile__header');
let profileRank = document.querySelector('.profile__rank');
const addButton = document.querySelector('.profile__add-button');
const popupAdd = document.querySelector('.popup_type_new-card');
const popupImage = document.querySelector('.popup_type_image');


editButton.addEventListener('click', () => {
    popupEdit.classList.add('popup_opened')
    nameInput.value = profileHeader.textContent;
    jobInput.value = profileRank.textContent;

});

function closePopup () {
    popupWindow[0].classList.remove('popup_opened');
    popupWindow[1].classList.remove('popup_opened');
    popupWindow[2].classList.remove('popup_opened');
}
closeButton[0].addEventListener('click', closePopup);
closeButton[1].addEventListener('click', closePopup);
closeButton[2].addEventListener('click', closePopup);


function formSubmitHandler (evt) {
    evt.preventDefault();
    profileHeader.textContent = nameInput.value;
    profileRank.textContent = jobInput.value;
    closePopup();
}
form.addEventListener('submit', formSubmitHandler);

addButton.addEventListener('click', () => {
    popupAdd.classList.add('popup_opened')

});

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

function renderCards (element) {
  const cardElement = cardTemplate.content.cloneNode(true);

  cardElement.querySelector('.element__image').src = element.link;
  cardElement.querySelector('.element__header').textContent = element.name;
  
  cardElement.querySelector('.element__like-button').addEventListener('click', function (evt) {
      evt.target.classList.toggle('element__like-button_active');
    })

  cardElement.querySelector('.element__cart-button').addEventListener('click', function (evt) {
      evt.target.closest('.element').remove();
    })

  cardElement.querySelector('.element__image').addEventListener('click', (e) => {
      popupImage.querySelector('.popup__full-image').src =
        e.target.closest('.element__image').src;
      popupImage.querySelector('.popup__image-description').textContent =
        e.target.closest('.element__image').parentNode.textContent;
      popupImage.classList.add('popup_opened');
    });

  cardsContainer.prepend(cardElement);
  }


initialCards.forEach((element) => {
  renderCards(element);
});

function formSubmitAddCard (evt) {
  evt.preventDefault();

  renderCards({name: newCardName.value, link: newCardImage.value});

  closePopup();
}

formItem.addEventListener('submit', formSubmitAddCard);