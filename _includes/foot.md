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

    window.onload = function() {
        var promise = video.play();

        if(promise !== undefined) {
            promise.then(_ => {

            }).catch(error => {
                var playButton = document.getElementById("play-button");
                playButton.style.display = "";

                var content = document.getElementById("content");
                content.style.opacity = "0";
            });
        }
    };

    function playVideo() {
        var playButton = document.getElementById("play-button");
        var content = document.getElementById("content");

        video.play();
        playButton.style.display = "none";
        content.style.opacity = "";
    }
</script>
</body>
</html>
