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

//redirects the page to the favorites page when clicked in the nav bar
const favoritesPageBtn = document.querySelector("#favPage");

favoritesPageBtn.addEventListener("click", function () {
  window.location.href = "favorites.html";
});

//redirects the page to the home page when clicked in the nav bar
const homePageBtn = document.querySelector("#homePage");

homePageBtn.addEventListener("click", function () {
  window.location.href = "index.html";
});

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
