// Create a container to append all cards
const container = document.getElementById("data-cards");

const favoritesBtn = document.querySelector("#Favorite-button");

//Mike and Wills working on
const favoritesPageBtn = document.querySelector("#favPage");

favoritesPageBtn.addEventListener("click", function () {
  window.location.href = "favorites.html";
});

const homePageBtn = document.querySelector("#homePage");

homePageBtn.addEventListener("click", function () {
  window.location.href = "index.html";
});
