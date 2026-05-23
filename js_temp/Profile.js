const modalData = [
    {title: "Game", text: "昔からゲームが好きでプラットフォームを問わずたくさんのゲームをやってきました！好きなゲームは Slay the Spire, Persona3, Apex Legends です！"},
    {title: "Vaundy", text: "中学3年生の頃から現在までずっとVaundyのファンで東京、横浜、埼玉や宮城様々なライブにいきました！好きな曲は「呼吸のように」です！"},
    {title: "Food", text: "好きな食べ物は牡蠣、角煮、お寿司です！味が濃い物からサッパリしたものまで割と幅広く食べます！"},
    {title: "Art", text: "昔から絵をかいたり学校でCGを学んだりオリジナルのキャラクター設定を考えたり創作活動が好きです！いつかプログラミングで創作ゲームとか作ってみたいです！"},
    {title: "Comic", text: "漫画も好きで好きな作品は「サカモトデイズ」「ジョジョリオン」です！"},
    {title: "Seal", text: "好きな動物はアザラシです！海洋生物が好きで他にもクラゲなども好きです！"},
]

const likeBtn = document.querySelectorAll('.js-like-btn');
const modalOverlay = document.querySelector('.modal-overlay');
const closeBtn = document.querySelector('.js-modal-close-btn')

const modalTitle = document.querySelector('.modal-card-title');
const modalText = document.querySelector ('.modal-card-text');

likeBtn.forEach((btn) => {
    
    btn.addEventListener('click', (event) => {

        const index = event.currentTarget.dataset.index;
        
        modalTitle.textContent = modalData[index].title;
        modalText.textContent = modalData[index].text;
        
        modalOverlay.style.display = 'flex';
    });
    
});

closeBtn.addEventListener('click', () => {
    modalOverlay.style.display = 'none';
});