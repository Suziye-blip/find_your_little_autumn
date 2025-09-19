document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('StartButton');
    const paragraph = button.previousElementSibling; // ボタンの直前の <p> を取得

    button.addEventListener('click', function () {
            window.location.href = 'search.html';
    });
});