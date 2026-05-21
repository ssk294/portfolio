const likeBtn = document.querySelector('.js-like-btn');

const modalOverlay = document.querySelector('.modal-overlay');

const closeBtn = document.querySelector('.js-modal-close-btn')

likeBtn.addEventListener('click',() => {
    modalOverlay.style.display= 'flex';
});

closeBtn.addEventListener('click',() =>{
    modalOverlay.style.display= 'none';
})