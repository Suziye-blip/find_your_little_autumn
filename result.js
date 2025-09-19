document.addEventListener('DOMContentLoaded', () => {
    const message = localStorage.getItem('resultMessage');
    const resultMessageElement = document.getElementById('result-message');
    const twitterShareArea = document.getElementById('twitter-share-area'); // 配置場所を取得

    if (message) {
        resultMessageElement.textContent = message;
        localStorage.removeItem('resultMessage');

        // Twitterシェアボタンを生成
        const twitterShareButton = document.createElement('a');
        twitterShareButton.className = 'twitter-share-button';
        twitterShareButton.href = 'https://twitter.com/share?ref_src=twsrc%5Etfw';
        twitterShareButton.setAttribute('data-show-count', 'false');
        twitterShareButton.setAttribute('data-text', message + " #RUNTEQ");
        twitterShareArea.appendChild(twitterShareButton);

        // Twitterウィジェットスクリプトを読み込み
        const script = document.createElement('script');
        script.async = true;
        script.src = 'https://platform.twitter.com/widgets.js';
        script.charset = 'utf-8';
        twitterShareArea.appendChild(script);

    } else {
        resultMessageElement.textContent = "秋が見つかりませんでした。再度プレイしてください。";
        //  結果がない場合はボタンを生成しないため、何もしない
    }
});
