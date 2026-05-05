const results = [
    {
        luck: "大吉",
        weight: 15,
        negai: "思いのままに叶うでしょう",
        renai: "誠意が相手に伝わります",
        gakumon: "安心して勉学に励め",
        kenkou: "すこぶる良好です",
        shigoto: "大きな利益が得られる予感",
        machibito: "早く来る",
        usemono: "すぐに見つかります"
    },
    {
        luck: "中吉",
        weight: 15,
        negai: "努力すれば叶うでしょう",
        renai: "落ち着いた行動が吉",
        gakumon: "集中すれば結果が出ます",
        kenkou: "規則正しい生活を",
        shigoto: "地道な努力が実を結ぶ",
        machibito: "遅れるが来ます",
        usemono: "低いところにあります"
    },
    {
        luck: "吉",
        weight: 25,
        negai: "少しずつ叶う。",
        renai: "焦りは禁物。誠実な態度が実を結びます。",
        gakumon: "基礎を固めれば、良い結果に繋がります。",
        kenkou: "早寝早起きを心がけること。",
        shigoto: "周囲との協力を大切にすれば、利益あり。",
        machibito: "遅れるけれど、必ずやって来ます。",
        usemono: "意外と近くにあるかもしれません。"
    },
    {
        luck: "小吉",
        weight: 15,
        negai: "小さな願いから叶い始めます。欲張らぬこと。",
        renai: "身近な縁を大切に。",
        gakumon: "苦手を克服すること。",
        kenkou: "無理は禁物。",
        shigoto: "目の前のタスクを確実に。",
        machibito: "来る気配あり。",
        usemono: "忘れたころに出てくるでしょう。"
    },
    {
        luck: "末吉",
        weight: 15,
        negai: "後に叶う。",
        renai: "今は耐える時。",
        gakumon: "成果が出るまで時間がかかるが、諦めないこと。",
        kenkou: "休養を優先せよ。",
        shigoto: "派手な成果は期待せず、足元を固めるべし。",
        machibito: "気長に待つのが良い。",
        usemono: "思わぬ場所で見つかる。"
    },
     {
        luck: "凶",
        weight: 10,
        negai: "今は叶い難い。",
        renai: "反省が必要。",
        gakumon: "集中力が散漫です。",
        kenkou: "睡眠不足に気を付けること。",
        shigoto: "小さなミスも確認を怠らぬこと。",
        machibito: "来ないでしょう。",
        usemono: "出にくい。整理整頓を。"
    },
     {
        luck: "大凶",
        weight: 5,
        negai: "何一つ叶わぬ。時を待つべし。",
        renai: "期待外れの結果に終わる。",
        gakumon: "絶望的。基礎からやり直すべし。",
        kenkou: "一刻も早く休養をとること。",
        shigoto: "周囲の助けも期待できぬ、慎重に。",
        machibito: "来ない。",
        usemono: "絶対に見つからぬ。新しい物をさがせ。"
    }

];
function getOmikuji() {
    const totalWeight = results.reduce((sum, item) => sum + item.weight, 0);
    let random = Math.random() * totalWeight;
    for (const result of results) {
        if (random < result.weight) return result;
        random -= result.weight;
    }
}

// --- 2. 画面が読み込まれたら動く処理 ---
window.addEventListener('DOMContentLoaded', () => {

    // --- A. ハンバーガーメニューの処理（名前を menuBtn に変更！） ---
    const menuBtn = document.querySelector('.menu-btn');
    const navMenu = document.querySelector('.nav-menu');

    if(menuBtn) {
        menuBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active'); // CSSで .active の時に出るようにしてね！
        });
    }

    // --- B. おみくじを引く処理（名前を omikujiBtn に変更！） ---
    const omikujiBtn = document.getElementById('omikuji-btn');
    
    if(omikujiBtn) {
        omikujiBtn.addEventListener('click', function() {
            const selected = getOmikuji();

           // 結果の書き換え
            const luckElement = document.getElementById('luck-text');
            luckElement.innerText = selected.luck;
            document.getElementById('negai-text').innerText = selected.negai;
            document.getElementById('renai-text').innerText = selected.renai;
            document.getElementById('gakumon-text').innerText = selected.gakumon;
            document.getElementById('kenkou-text').innerText = selected.kenkou;
            document.getElementById('shigoto-text').innerText = selected.shigoto;
            document.getElementById('machibito-text').innerText = selected.machibito;
            document.getElementById('usemono-text').innerText = selected.usemono;
            // オーラの演出
            const luckContainer = luckElement.closest('.luck-rank');
            luckContainer.classList.remove('aura-gold', 'aura-black');
            if (selected.luck === "大吉") {
                luckContainer.classList.add('aura-gold');
            } else if (selected.luck === "凶" || selected.luck === "大凶") {
                luckContainer.classList.add('aura-black');
            }

            // お札を表示
            const resultCard = document.getElementById('result-card');
            resultCard.classList.remove('hidden');
            resultCard.classList.add('show');
        });
    }

    // --- C. 閉じるボタンの処理 ---
    const closeBtn = document.getElementById('close-btn');
    if(closeBtn) {
        closeBtn.addEventListener('click', () => {
            const resultCard = document.getElementById('result-card');
            resultCard.classList.remove('show');
            resultCard.classList.add('hidden');
            
            const luckElement = document.getElementById('luck-text');
            luckElement.closest('.luck-rank').classList.remove('aura-gold', 'aura-black');
        });
    }
});