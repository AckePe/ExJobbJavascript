document.addEventListener("click", buttonListener() {
  var button = document.getElementById("toggleButton");

  button.addEventListener("click", function () {
    if (button.textContent === "Search") {
      button.textContent = "Home";
    } else {
      button.textContent = "Search";
    }
  });
});
