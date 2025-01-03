// Create a container to append all cards
const container = document.getElementById("data-cards");

const favoritesBtn = document.querySelector("#Favorite-button");

const favoritesPageBtn = document.querySelector("#favPage");

const homePageBtn = document.querySelector("#homePage");

// Function that builds the elements and appends to DOM
function createFavCard(favItem) {
  console.log(favItem);
  // Create the card structure
  const divColEl = document.createElement("div");
  divColEl.setAttribute("class", "col");
  console.log(divColEl);

  const divCardEl = document.createElement("div");
  divCardEl.setAttribute("class", "card shadow-sm");

  const imgEl = document.createElement("img");
  imgEl.setAttribute("class", "bd-placeholder-img card-img-top");
  imgEl.setAttribute("alt", "Card image");
  imgEl.setAttribute("src", favItem.strMealThumb); // Use the favItem parameter here

  const divCardBody = document.createElement("div");
  divCardBody.setAttribute("class", "card-body");

  const cardTitle = document.createElement("h5");
  cardTitle.setAttribute("class", "card-title");
  cardTitle.textContent = favItem.strMeal; // Use the favItem parameter here

  const cardP = document.createElement("p");
  cardP.setAttribute("class", "card-text");
  cardP.textContent = favItem.strInstructions; // Use the favItem parameter here

  // Assemble the card
  divCardBody.appendChild(cardTitle);
  divCardBody.appendChild(cardP);
  divCardEl.appendChild(imgEl);
  divCardEl.appendChild(divCardBody);
  divColEl.appendChild(divCardEl);

  // Append the card column to the container
  container.appendChild(divColEl);
}

// Function that handles a case where there are no favorites
function noFavorites() {
  const pEl = document.createElement("p");
  const mainEl = document.querySelector("#no-favs");
  pEl.textContent =
    "No favorite recipes. Please go to home page and add your favorite recipes by clicking the add favorite button.";
  mainEl.appendChild(pEl);
}

// Function that renders the favorite items from local storage
function renderFavorite() {
  const favData = JSON.parse(localStorage.getItem("favorites")) || [];
  // console.log(favData);
  if (favData.length > 0) {
    for (let i = 0; i < favData.length; i++) {
      createFavCard(favData[i]); // Pass favData[i] into createFavCard()
    }
  } else {
    noFavorites();
  }
}

// Call function for rendering favorite items
renderFavorite();
