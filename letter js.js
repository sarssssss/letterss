document.addEventListener("DOMContentLoaded", function() {
    const giftBox = document.getElementById('giftBox');
    const loveLetter = document.getElementById('loveLetter');
    const audio = new Audio('Until-I-Found-You(PagalWorld).mp3');

    giftBox.addEventListener('click', function() {
        loveLetter.classList.toggle('hidden');
        audio.play();
    });
});
