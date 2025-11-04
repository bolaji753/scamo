    // Loading animation effect
    window.onload = function() {
      setTimeout(() => {
        document.getElementById("loader").style.display = "none";
        document.getElementById("formContainer").style.display = "block";
      }, 1500); // 1.5 seconds delay for loader
    }