var video = document.getElementById("b-video");
var playButton = document.getElementById("play-button");
var content = document.getElementById("content");
var attempts = 0;

window.onload = function() {
    playVideo();
};

function playVideo() {
    var promise = video.play();

    hidePlayButton();
    if(attempts > 0) {
        showContent();
    }

    if(promise !== undefined) {
        promise.then(_ => {
            showContent();
        }).catch(error => {
            showPlayButton();
        });
    }

    attempts++;
}

function showPlayButton() {
    playButton.style.display = "";
}

function hidePlayButton() {
    playButton.style.display = "none";
}

function showContent() {
    content.style.transition = "opacity 0.5s";
    content.style.opacity = "1";
}
