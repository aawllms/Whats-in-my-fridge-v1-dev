// Create a container to append all cards
const container = document.getElementById("data-cards"); // Make sure you have a container in your HTML

let mealData = [];

function getMealData() {
  fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
    .then((Response) => {
      return Response.json();
    })
    .then((data) => {
      console.log(data);
      const apiData = data.meals;
      console.log(apiData);

      mealData.push(apiData);

      for (let i = 0; i < apiData.length; i++) {
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
        cardTitle.textContent = apiData[i].strMeal; // Set the title to the current item in newArray

        const cardP = document.createElement("p");
        cardP.setAttribute("class", "card-text");
        cardP.textContent = apiData[i].strInstructions;

        const cardBtn = document.createElement("button");
        cardBtn.setAttribute("class", "btn btn-primary");
        cardBtn.setAttribute("id", "favorite-button");
        cardBtn.setAttribute("data-index", apiData[i].idMeal);
        cardBtn.setAttribute("href", "#");
        cardBtn.textContent = "Add to Favorites";

        // Assemble the card
        divCardBody.appendChild(cardTitle);
        divCardBody.appendChild(cardP);
        divCardBody.appendChild(cardBtn);
        divCardEl.appendChild(imgEl);
        divCardEl.appendChild(divCardBody);
        divColEl.appendChild(divCardEl);

        // Append the card column to the container
        container.appendChild(divColEl);
      }
    });
}

getMealData();

container.addEventListener("click", function (event) {
  const element = event.target;
  // console.log(element);
  const id = element.getAttribute("data-index");
  //console.log(id);

  //console.log(mealData);

  const apiData = mealData[0];
  //console.log(apiData);

  const favObj = apiData.find((meal) => meal.idMeal === id);
  // console.log(favObj);

  //Create a variable = empty array
  //Push object into array
  const favArr = JSON.parse(localStorage.getItem("favorites")) || [];
  //Push array into local storage
  favArr.push(favObj);
  //json.stringify array
  localStorage.setItem(`favorites`, JSON.stringify(favArr));
  //console.log();

  // windows.localstorage.setItem(Json.stringify)
});

function searchMeal() {
  const searchTerm = document.getElementById("searchInput").value.trim();

  if (!searchTerm) {
    alert("Please enter a search term");
    return;
  }

  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      const apiData = data.meals;
      console.log(apiData);

      const container = document.getElementById("data-cards");
      container.innerHTML = "";

      if (!apiData) {
        container.innerHTML =
          "<p>No meals found. Please try a different search term.</p>";
        return;
      }

      apiData.forEach((meal) => {
        const divColEl = document.createElement("div");
        divColEl.setAttribute("class", "col");

        const divCardEl = document.createElement("div");
        divCardEl.setAttribute("class", "card shadow-sm");

        const imgEl = document.createElement("img");
        imgEl.setAttribute("class", "bd-placeholder-img card-img-top");
        imgEl.setAttribute("alt", "Card image");
        imgEl.setAttribute("src", meal.strMealThumb);

        const divCardBody = document.createElement("div");
        divCardBody.setAttribute("class", "card-body");

        const cardTitle = document.createElement("h5");
        cardTitle.setAttribute("class", "card-title");
        cardTitle.textContent = meal.strMeal;

        const cardP = document.createElement("p");
        cardP.setAttribute("class", "card-text");
        cardP.textContent = meal.strInstructions.slice(0, 100) + "...";

        const cardBtn = document.createElement("button");
        cardBtn.setAttribute("class", "btn btn-primary");
        cardBtn.setAttribute("id", "favorite-button");
        cardBtn.setAttribute("data-index", meal.idMeal);
        cardBtn.textContent = "Add to Favorites";

        divCardBody.appendChild(cardTitle);
        divCardBody.appendChild(cardP);
        divCardBody.appendChild(cardBtn);
        divCardEl.appendChild(imgEl);
        divCardEl.appendChild(divCardBody);
        divColEl.appendChild(divCardEl);

        container.appendChild(divColEl);
      });
    })
    .catch((error) => {
      console.error("Error fetching meal data:", error);
    });
}

// const searchBtn = document.getElementById("searchBtn");
// searchBtn.addEventListener("submit", (event) => {
//   event.preventDefault();
//   searchMeal();
// });

const formEl = document.getElementById("custom-form");

formEl.addEventListener("submit", function (event) {
  event.preventDefault();
});