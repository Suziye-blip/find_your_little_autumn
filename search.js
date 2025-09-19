document.addEventListener('DOMContentLoaded', () => {
    const text = "秋秋秋秋秋秋秋秋秋秋秋秋秋秋秋秋秋秋秋秋秋秋秋秋秋秋秋秋秋秋秋秋秋秋秋秋秋秋秋秋秋秋秋秋秋秋秋秋秋秋";
    const container = document.getElementById('container');
    const chars = text.replace(/ /g, ''); // スペースを除外

    const minFontSize = 1; // 最小フォントサイズ (px)
    const maxFontSize = 60; // 最大フォントサイズ (px)
    const totalChars = chars.length;

    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;

    const charElements = []; // 生成した<span>要素を格納する配列

    for (let i = 0; i < totalChars; i++) {
        const char = chars[i];
        const span = document.createElement('span');
        span.textContent = char;
        span.classList.add('random-char');

        // ランダムなフォントサイズを直接生成
        const randomFontSize = Math.floor(Math.random() * (maxFontSize - minFontSize + 1)) + minFontSize;
        span.style.fontSize = `${randomFontSize}px`;

        const randomX = Math.floor(Math.random() * (containerWidth - randomFontSize));
        const randomY = Math.floor(Math.random() * (containerHeight - randomFontSize));
        
        span.style.left = `${randomX}px`;
        span.style.top = `${randomY}px`;

        container.appendChild(span);
        charElements.push(span);
    }

    // フォントサイズが小さい順に要素をソート
    // 同じフォントサイズの場合でも、配列内での出現順序は維持される
    const sortedChars = [...charElements].sort((a, b) => {
        const sizeA = parseInt(a.style.fontSize);
        const sizeB = parseInt(b.style.fontSize);
        return sizeA - sizeB;
    });

    // 各要素にクリックイベントリスナーを追加
    charElements.forEach(element => {
        element.addEventListener('click', (event) => {
            const clickedElement = event.target;
            const clickedFontSize = parseInt(clickedElement.style.fontSize);
            
            // クリックされた要素のフォントサイズがソート済み配列の何番目にあるかを探す
            // 同じフォントサイズの文字がある場合、indexOf()は最初に見つかったもののインデックスを返す
            const rank = sortedChars.indexOf(clickedElement);

            // 順位に応じてメッセージを決定
            let message = "";
            if (rank === 0) {
                message = "1番小さい秋、見つけた。";
            } else if (rank === 1) {
                message = "2番目に小さい秋、見つけた。";
            } else {
                message = `${rank + 1}番目に小さい秋、見つけた。`;
            }

            // ここでlocalStorageにメッセージを保存
            localStorage.setItem('resultMessage', message);
            
            // 結果画面にリダイレクト
            window.location.href = 'result.html';

        });
    });
});
