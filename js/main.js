// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  const mobileMenu = document.getElementById("mobile-menu");

  function togglemenu() {
    const icon = document.getElementById("icon");
    if (mobileMenu.style.display === "block") {
      mobileMenu.style.display = "none";
      if (icon.classList.contains("fa-xmark")) {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

     // Enable scrolling
      document.body.classList.remove("no-scroll");
      }
    } else {
      mobileMenu.style.display = "block";
      icon.classList.remove("fa-bars");
      icon.classList.add("fa-xmark");
      // Disable scrolling
      document.body.classList.add("no-scroll");
    }
  }

  // Add click event listener to the icon
  const icon = document.getElementById("icon");
  icon.addEventListener("click", togglemenu);

  //     // Get the <ul> element
  const ul = document.querySelector("#nav ul");

  // Add a click event listener to the <ul>
  ul.addEventListener("click", function (event) {
    // Check if the clicked element is an <li> or a child of an <li>
    const li = event.target.closest("li");

    if (li) {
      togglemenu();
    }
  });
});
