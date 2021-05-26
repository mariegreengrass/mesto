    let popupWindow = document.querySelector('.popup');
    let editButton = document.querySelector('.profile__edit-button');
    let closeButton = document.querySelector('.popup__close-button');

    editButton.addEventListener('click', () => {
        popupWindow.classList.add('popup_opened')
    });
    closeButton.addEventListener('click', () => {
        popupWindow.classList.remove('popup_opened')
    });

    let form = document.querySelector('.popup__container');
    let nameInput = document.querySelector('.popup__item_heading');
    let jobInput = document.querySelector('.popup__item_rank');
    let profileHeader = document.querySelector('.profile__header');
    let profileRank = document.querySelector('.profile__rank');
    
    function formSubmitHandler (evt) {
        evt.preventDefault();
        profileHeader.textContent = nameInput.value;
        profileRank.textContent = jobInput.value;
    }
    form.addEventListener('submit', formSubmitHandler);
    form.addEventListener('submit', () => {
        popupWindow.classList.remove('popup_opened')
    });