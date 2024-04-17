function toggleContent() {
  const searchContent = document.getElementById("searchContent");
  const elementsToToggle = searchContent.querySelectorAll(".hidden"); // Select all elements with the class "hidden" inside the nav
  elementsToToggle.forEach((element) => {
    element.classList.toggle("hidden");
  });
}
