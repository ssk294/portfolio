const likeBtn = document.querySelector('.js-like-btn');

const modalOverlay = document.querySelector('.modal-overlay');

const closeBtn = document.querySelector('.js-modal-close-btn')

likeBtn.addEventListener('click',() => {
    modalOverlay.style.opacity= '1';
    modalOverlay.style.pointerEvents = 'auto';
});

closeBtn.addEventListener('click',() =>{
    modalOverlay.style.opacity= '0';
    modalOverlay.style.pointerEvents = 'none';
})