const roulette = document.getElementById('roulette');
const message = document.getElementById('message');
const exerciseImage = document.getElementById('exerciseImage');
const startButton = document.getElementById('startButton');

const videos = [
    { name: 'ラジオ体操第1', url: 'https://www.youtube.com/watch?v=feSVtC1BSeQ', image: './img/exercise1.png', angleRange: [0, 180] },
    { name: 'ラジオ体操第2', url: 'https://www.youtube.com/watch?v=2kZlLq7pW8s', image: './img/exercise2.png', angleRange: [180, 360] }
];

let interval;

startButton.addEventListener('click', () => {
    startButton.disabled = true; // 連続クリック防止
    
    const randomSpin = Math.floor(Math.random() * 360) + 1080; // 最低3回転
    roulette.style.transform = `rotate(${randomSpin}deg)`;

    // 画像の切り替えアニメーション開始
    let currentImage = 0;
    interval = setInterval(() => {
        currentImage = (currentImage + 1) % 2;
        exerciseImage.src = videos[currentImage].image;
        startButton.textContent = videos[currentImage].name; // タイトル切り替え
    }, 500); // 0.5秒ごとに切り替え

    setTimeout(() => {
        clearInterval(interval); // アニメーション停止
        let finalAngle = (randomSpin % 360);

        let selectedVideo = videos.find(video => finalAngle >= video.angleRange[0] && finalAngle < video.angleRange[1]);

        exerciseImage.src = selectedVideo.image;
        startButton.textContent = selectedVideo.name;

        message.textContent = `${selectedVideo.name} が選ばれました！まもなく再生します...`;

        setTimeout(() => {
            // window.location.href = targetVideo.url;
        }, 1000);
    }, 3000);
});
