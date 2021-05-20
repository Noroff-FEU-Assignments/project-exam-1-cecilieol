// API CALL

const titleContainer = document.querySelector("title");
const modalContainer = document.querySelector(".image-modal");
const recipeContainer = document.querySelector(".recipe.container");
const introContainer = document.querySelector(".intro-container");
const nameContainer = document.querySelector(".name-container");
const imageContainer = document.querySelector(".image-container");
const ingredientsContainer = document.querySelector(".ingredients-container");
const instructionContainer = document.querySelector(".instruction-container");
const commentsContainer = document.querySelector(".comments-container");
const loader = document.querySelector(".loading");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);

const url = `https://cecilieol.no/the-green-kitchen/wp-json/wp/v2/posts/${id}?_embed`;

console.log(url);

async function fetchRecipe () {
    try {
        const response = await fetch(url);
        const recipe = await response.json();

        console.log(recipe);

        titleContainer.innerHTML = `The Green Kitchen - ${recipe.title.rendered}`;
        nameContainer.innerHTML = `<h1>${recipe.title.rendered}</h1>`;
        introContainer.innerHTML = `<p>${recipe.excerpt.rendered}</p>`;
        imageContainer.innerHTML = `<img src="${recipe._embedded['wp:featuredmedia']['0'].source_url}" alt="${recipe.title.rendered}">`;
        modalContainer.innerHTML = `<img src="${recipe._embedded['wp:featuredmedia']['0'].source_url}" width="100%" alt="${recipe.title.rendered}">
                                    <p>${recipe.title.rendered}</p>
                                    `;

        ingredientsContainer.innerHTML = `<h2>Ingredients</h2>
                                            ${recipe.content.rendered}`;
        instructionContainer.innerHTML = `<h2>Instructions</h2>
                                            ${recipe.content.rendered}`;

        commentsContainer.innerHTML += `<h2>Comments</h2>
                                            <fieldset>
                                                <div class="comment-author">
                                                    <h3>Author name</h3>
                                                </div>
                                                 <div class="comment-content">
                                                    <p>Comment text here</p>
                                                </div>
                                                 <div class="comment-date">
                                                    <p>Date: 27/04/2021</p>
                                                </div>
                                             </fieldset>`;

        loader.innerHTML = "";

    } catch(error) {
        console.log(error);
        loader.innerHTML = "";
        if (recipeContainer.innerHTML = "") {
            recipeContainer.innerHTML = displayError("An error occurred when calling the API");
        } else {
            recipeContainer.innerHTML += displayError("An error occurred fetching all information from the API");
        }
    }
}

fetchRecipe();


// IMAGE MODAL

imageContainer.onclick = function() {
    modalContainer.style.display = "block";;
}

window.onclick = function(event) {
    if (event.target === modalContainer) {
      modalContainer.style.display = "none";
    }
}