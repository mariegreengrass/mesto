let popupWindow = document.querySelector('.popup');
let editButton = document.querySelector('.profile__edit-button');
let closeButton = document.querySelector('.popup__close-button');

editButton.addEventListener('click', () => {
    popupWindow.classList.add('popup_opened')
    nameInput.value = profileHeader.textContent;
    jobInput.value = profileRank.textContent;

});
closeButton.addEventListener('click', () => {
    closePopup();

});
function closePopup () {
    popupWindow.classList.remove('popup_opened')
}

let form = document.querySelector('.popup__form');
let nameInput = document.querySelector(".popup__item_type_name");
let jobInput = document.querySelector(".popup__item_type_rank");
let profileHeader = document.querySelector('.profile__header');
let profileRank = document.querySelector('.profile__rank');

function formSubmitHandler (evt) {
    evt.preventDefault();
    profileHeader.textContent = nameInput.value;
    profileRank.textContent = jobInput.value;
    closePopup();
}
form.addEventListener('submit', formSubmitHandler);
