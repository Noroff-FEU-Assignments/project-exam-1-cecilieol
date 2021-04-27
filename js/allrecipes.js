/* API CALL */

const url = "https://cecilieol.no/the-green-kitchen/wp-json/wp/v2/posts?_embed&per_page=20";

const recipeContainer = document.querySelector(".all-recipes");
const moreContainer = document.querySelector(".view-more-recipes");
const moreButton = document.querySelector(".more-button");

async function getRecipes() {
    try {
        const response = await fetch(url);
        const recipes = await response.json();

        console.log(recipes);

        recipeContainer.innerHTML = "";

        for (let i = 0; i < recipes.length; i++) {

            console.log(recipes[i].name);

            recipeContainer.innerHTML += `<div class="single-recipe">
                                                <a href="recipe.html?id=${recipes[i].id}">
                                                    <img src="${recipes[i]._embedded['wp:featuredmedia']['0'].source_url}" alt="recipe-picture">
                                                    <h3>${recipes[i].title.rendered}</h3>
                                                </a>
                                            </div>`;


            moreContainer.innerHTML = `<button class="more-button">View more</button>`;


        }

    } catch(error) {
        console.log(error);
        if (recipeContainer.innerHTML = "") {
            recipeContainer.innerHTML = displayError("An error occurred when calling the API");
        } else {
            recipeContainer.innerHTML += displayError("An error occurred fetching all recipes from the API");
        }
        
    }
}

getRecipes();

