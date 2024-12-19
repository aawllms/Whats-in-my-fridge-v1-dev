

// Create a container to append all cards
const container = document.getElementById("data-cards"); // Make sure you have a container in your HTML

function getMealData() {
  fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
    .then((Response) => {
      return Response.json();
    })
    .then((data) => {
      console.log(data);
      const apiData = data.meals;
      console.log(apiData);

      
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

        const cardBtn = document.createElement("a");
        cardBtn.setAttribute("class", "btn btn-primary");
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
