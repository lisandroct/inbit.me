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
        alert("Thank you, for contacting us");
    }
</script>
</body>
</html>
