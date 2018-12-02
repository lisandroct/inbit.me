<script>
    var form = document.getElementById("contact-form");

    form.onsubmit = function(e) {
      	e.preventDefault();

      	var f = e.target,
            		formData = new FormData(f),
            		xhr = new XMLHttpRequest();

      	xhr.open("POST", f.action);
      	xhr.send(formData);

        form.reset();

        var title = document.getElementById("title");
        var prev = title.innerHTML;
        title.innerHTML = "¡Gracias por contactarnos!";
        window.setTimeout(function () {
          title.innerHTML = prev;
        }, 3000);
    }
</script>
<script>
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
        content.style.opacity = "1";        
    }
</script>
</body>
</html>
