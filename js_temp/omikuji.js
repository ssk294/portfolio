const btn = document.getElementById('omikuji-btn');
const resultCard = document.getElementById('result-card');
btn.addEventListener('click',function(){
    resultCard.innerText = "大吉";
    resultCard.classList.add('show');
});