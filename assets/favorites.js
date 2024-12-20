// Create a container to append all cards
const container = document.getElementById("data-cards");

const favoritesBtn = document.querySelector("#Favorite-button");

const favoritesPageBtn = document.querySelector("#favPage");

const homePageBtn = document.querySelector("#homePage");

//creat function that builds the elements and appends to DOM

function createFavCard() {
  //update placeholder to be name from script.js naming of saving items
  for (let i = 0; i < PLACEHOLDER.length; i++) {
    // Create the card structure
    const divColEl = document.createElement("div");
    divColEl.setAttribute("class", "col");
    console.log(divColEl);
    const divCardEl = document.createElement("div");
    divCardEl.setAttribute("class", "card shadow-sm");

    const imgEl = document.createElement("img");
    imgEl.setAttribute("class", "bd-placeholder-img card-img-top");
    imgEl.setAttribute("alt", "Card image");
    imgEl.setAttribute("src", apiData[i].strMealThumb);

    const divCardBody = document.createElement("div");
    divCardBody.setAttribute("class", "card-body");

    const cardTitle = document.createElement("h5");
    cardTitle.setAttribute("class", "card-title");
    cardTitle.textContent = apiData[i].strMeal;

    const cardP = document.createElement("p");
    cardP.setAttribute("class", "card-text");
    cardP.textContent = apiData[i].strInstructions;

    // Assemble the card
    divCardBody.appendChild(cardTitle);
    divCardBody.appendChild(cardP);

    divCardEl.appendChild(imgEl);
    divCardEl.appendChild(divCardBody);
    divColEl.appendChild(divCardEl);

    // Append the card column to the container
    container.appendChild(divColEl);
  }
}

//create a function that handles a case where there is no favorites
function noFavorites() {
  const pEl = document.createElement("p");
  const mainEl = document.querySelector("#no-favs");
  pEl.textContent =
    "No favorite recipes. Please go to home page and add your favorite recipes by clicking the add favorite button";
  mainEl.appendChild(pEl);
}

//create function that renders the favorite items from local storage ***ADD FAVORITE NAME FOR PLACEHOLDER
function renderFavorite() {
  const favData = JSON.parse(localStorage.getItem("Placeholder")) || [];
  if (favData.length > 0) {
    for (let i = 0; i < favData.length; i++) {
      createFavCard(favData[i]);
    }
  } else {
    noFavorites();
  }
}
//call function for rendering favorite items
renderFavorite();

favoritesPageBtn.addEventListener("click", function () {
  window.location.href = "favorites.html";
});

homePageBtn.addEventListener("click", function () {
  window.location.href = "index.html";
});
