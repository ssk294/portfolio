let enemyHP = 50;

const cardData = {
    name: "アタック",
    cost: "１コスト",
    damage: 6
};


function createCard(data) {
    const hand = document.getElementById('hand');
    const card = document.createElement('div');
    card.classList.add('card'); 

    card.innerHTML = `
        <div class="card-cost">${data.cost}</div>
        <div class="card-name">${data.name}</div>
        <div class="card-desc">${data.damage} ダメージ</div>
    `;

    card.addEventListener('click', () => {
    enemyHP -= data.damage;
    
    document.getElementById('enemy-hp').textContent = enemyHP;

    console.log(`敵に ${data.damage} ダメージ！ 残りHP: ${enemyHP}`);
        card.remove();
    });

    hand.appendChild(card);
}

createCard(cardData);