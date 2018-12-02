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
    window.onload = function() {
        var video = document.getElementById("b-video");

        video.play();
    };
</script>
</body>
</html>
