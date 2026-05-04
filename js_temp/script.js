// 1. セリフの「リスト（配列）」を作る
const messages = [
    'こんにちは！',
    '今日はいい天気だね☀️',
    'お腹すいたなぁ〜🍙',
    '今日も頑張ってるね！✨',
    '何か御用かな？🐥',
    '日々コツコツ勉強！',
    'これからサイトをどんどん本格化していくみたいだよ！',
    '僕がこのサイトのマスコットだよ！',
    'お天気apiとか絡めて何かするらしいよ？',
    'おみくじコーナー開設予定！',
    '僕の立ち絵そのうち新しくなるって！',
    '楽しみながら学ぶのがモットー！',
];

let count = 0;

function talk() {
    count++;

    if (count < 17) {
        let index = Math.floor(Math.random() * messages.length);
        document.getElementById('balloon').innerText = messages[index];
        document.getElementById('chara-body').innerText = '🐥';
        // ひよこから「aura」という名前を剥がす
        document.getElementById('chara-body').classList.remove('aura');
    } else if (count < 20) {
        // ちょっと嫌がる
        document.getElementById('balloon').innerText = 'ちょっと、押しすぎじゃない？😅';
    } else {
        // 20回以上：ついにキレる！
        document.getElementById('balloon').innerText = 'おい！！いい加減にしろ！！💢';
        document.getElementById('chara-body').innerText = '😡'; // 表情も変えちゃおう！
        // ひよこに「aura」という名前をつける
        document.getElementById('chara-body').classList.add('aura');
        count = 0; // 箱の中身を空っぽにする
    }
}

window.addEventListener('DOMContentLoaded', () => {
    // --- ハンバーガーメニューの処理 ---
    const btn = document.querySelector('.menu-btn');
    const nav = document.querySelector('.nav-menu');

    if(btn) { // ボタンが存在するか一応チェック
        btn.addEventListener('click', () => {
            nav.classList.toggle('active');
        });
    }

    // --- ひよこちゃんの処理を「復活」させる！ ---
    const chara = document.getElementById('chara-body');
    if(chara) {
        chara.addEventListener('click', () => {
            talk();
        });
    }
});