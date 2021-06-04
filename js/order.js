/* SORT LATEST */

const sortLatest = document.querySelector(".sort-latest");

async function getRecipesLatest() {
    try {
        const response = await fetch(url);
        const recipes = await response.json();

        recipeContainer.innerHTML = "";

        for (let i = 0; i < recipes.length; i++) {

            recipeContainer.innerHTML += `<div class="single-recipe">
                                                <a href="recipe.html?id=${recipes[i].id}">
                                                    <img src="${recipes[i]._embedded['wp:featuredmedia']['0'].source_url}" alt="${recipes[i].title.rendered}">
                                                    <h3>${recipes[i].title.rendered}</h3>
                                                </a>
                                            </div>`;

            sortLatest.innerHTML = "<b>Latest</b>";

            sortAz.innerHTML = "A-Z";
            sortZa.innerHTML = "Z-A";
            filterDairy.innerHTML = "Dairy Free";
            filterGluten.innerHTML = "Gluten Free";
            filterVegan.innerHTML = "Vegan";
            filterVegetarian.innerHTML = "Vegetarian";


            moreButton.style.display = "block";

        }

    } catch(error) {
        if (recipeContainer.innerHTML = "") {
            recipeContainer.innerHTML = displayError("An error occurred when calling the API");
        } else {
            recipeContainer.innerHTML += displayError("An error occurred fetching all recipes from the API");
        }
        
    }
}

sortLatest.addEventListener("click", getRecipesLatest);

/* SORT A-Z */

const sortAzUrl = "https://cecilieol.no/the-green-kitchen/wp-json/wp/v2/posts?_embed&per_page=20&orderby=title&order=asc";
const sortAz = document.querySelector(".sort-az");

async function getRecipesAz() {
    try {
        const response = await fetch(sortAzUrl);
        const recipes = await response.json();

        recipeContainer.innerHTML = "";

        for (let i = 0; i < recipes.length; i++) {

            recipeContainer.innerHTML += `<div class="single-recipe">
                                                <a href="recipe.html?id=${recipes[i].id}">
                                                    <img src="${recipes[i]._embedded['wp:featuredmedia']['0'].source_url}" alt="${recipes[i].title.rendered}">
                                                    <h3>${recipes[i].title.rendered}</h3>
                                                </a>
                                            </div>`;

            sortAz.innerHTML = "<b>A-Z</b>";

            sortLatest.innerHTML = "Latest";
            sortZa.innerHTML = "Z-A";
            filterDairy.innerHTML = "Dairy Free";
            filterGluten.innerHTML = "Gluten Free";
            filterVegan.innerHTML = "Vegan";
            filterVegetarian.innerHTML = "Vegetarian";


            moreButton.style.display = "block";

        }

    } catch(error) {
        if (recipeContainer.innerHTML = "") {
            recipeContainer.innerHTML = displayError("An error occurred when calling the API");
        } else {
            recipeContainer.innerHTML += displayError("An error occurred fetching all recipes from the API");
        }
        
    }
}

sortAz.addEventListener("click", getRecipesAz);

/* SORT Z-A */

const sortZaUrl = "https://cecilieol.no/the-green-kitchen/wp-json/wp/v2/posts?_embed&per_page=20&orderby=title&order=desc";
const sortZa = document.querySelector(".sort-za");

async function getRecipesZa() {
    try {
        const response = await fetch(sortZaUrl);
        const recipes = await response.json();

        recipeContainer.innerHTML = "";

        for (let i = 0; i < recipes.length; i++) {

            recipeContainer.innerHTML += `<div class="single-recipe">
                                                <a href="recipe.html?id=${recipes[i].id}">
                                                    <img src="${recipes[i]._embedded['wp:featuredmedia']['0'].source_url}" alt="${recipes[i].title.rendered}">
                                                    <h3>${recipes[i].title.rendered}</h3>
                                                </a>
                                            </div>`;

            sortZa.innerHTML = "<b>Z-A</b>";

            sortLatest.innerHTML = "Latest";
            sortAz.innerHTML = "A-Z";
            filterDairy.innerHTML = "Dairy Free";
            filterGluten.innerHTML = "Gluten Free";
            filterVegan.innerHTML = "Vegan";
            filterVegetarian.innerHTML = "Vegetarian";


            moreButton.style.display = "block";

        }

    } catch(error) {
        if (recipeContainer.innerHTML = "") {
            recipeContainer.innerHTML = displayError("An error occurred when calling the API");
        } else {
            recipeContainer.innerHTML += displayError("An error occurred fetching all recipes from the API");
        }
        
    }
}

sortZa.addEventListener("click", getRecipesZa);

/* FILTER DAIRY FREE */

const filterDairyUrl = "https://cecilieol.no/the-green-kitchen/wp-json/wp/v2/posts?_embed&per_page=20&categories=32";
const filterDairy = document.querySelector(".filter-dairy");

async function getRecipesDairy() {
    try {
        const response = await fetch(filterDairyUrl);
        const recipes = await response.json();

        recipeContainer.innerHTML = "";

        for (let i = 0; i < recipes.length; i++) {

            recipeContainer.innerHTML += `<div class="single-recipe">
                                                <a href="recipe.html?id=${recipes[i].id}">
                                                    <img src="${recipes[i]._embedded['wp:featuredmedia']['0'].source_url}" alt="${recipes[i].title.rendered}">
                                                    <h3>${recipes[i].title.rendered}</h3>
                                                </a>
                                            </div>`;

            filterDairy.innerHTML = "<b>Dairy Free</b>";

            sortLatest.innerHTML = "Latest";
            sortAz.innerHTML = "A-Z";
            sortZa.innerHTML = "Z-A";
            filterGluten.innerHTML = "Gluten Free";
            filterVegan.innerHTML = "Vegan";
            filterVegetarian.innerHTML = "Vegetarian";


            moreButton.style.display = "block";

        }

    } catch(error) {
        if (recipeContainer.innerHTML = "") {
            recipeContainer.innerHTML = displayError("An error occurred when calling the API");
        } else {
            recipeContainer.innerHTML += displayError("An error occurred fetching all recipes from the API");
        }
        
    }
}

filterDairy.addEventListener("click", getRecipesDairy);

/* FILTER GLUTEN FREE */

const filterGlutenUrl = "https://cecilieol.no/the-green-kitchen/wp-json/wp/v2/posts?_embed&per_page=20&categories=33";
const filterGluten = document.querySelector(".filter-gluten");

async function getRecipesGluten() {
    try {
        const response = await fetch(filterGlutenUrl);
        const recipes = await response.json();

        recipeContainer.innerHTML = "";

        for (let i = 0; i < recipes.length; i++) {

            recipeContainer.innerHTML += `<div class="single-recipe">
                                                <a href="recipe.html?id=${recipes[i].id}">
                                                    <img src="${recipes[i]._embedded['wp:featuredmedia']['0'].source_url}" alt="${recipes[i].title.rendered}">
                                                    <h3>${recipes[i].title.rendered}</h3>
                                                </a>
                                            </div>`;

            filterGluten.innerHTML = "<b>Gluten Free</b>";

            sortLatest.innerHTML = "Latest";
            sortAz.innerHTML = "A-Z";
            sortZa.innerHTML = "Z-A";
            filterDairy.innerHTML = "Dairy Free";
            filterVegan.innerHTML = "Vegan";
            filterVegetarian.innerHTML = "Vegetarian";


            moreButton.style.display = "block";

        }

    } catch(error) {
        if (recipeContainer.innerHTML = "") {
            recipeContainer.innerHTML = displayError("An error occurred when calling the API");
        } else {
            recipeContainer.innerHTML += displayError("An error occurred fetching all recipes from the API");
        }
        
    }
}

filterGluten.addEventListener("click", getRecipesGluten);

/* FILTER VEGAN */

const filterVeganUrl = "https://cecilieol.no/the-green-kitchen/wp-json/wp/v2/posts?_embed&per_page=20&categories=29";
const filterVegan = document.querySelector(".filter-vegan");

async function getRecipesVegan() {
    try {
        const response = await fetch(filterVeganUrl);
        const recipes = await response.json();

        recipeContainer.innerHTML = "";

        for (let i = 0; i < recipes.length; i++) {

            recipeContainer.innerHTML += `<div class="single-recipe">
                                                <a href="recipe.html?id=${recipes[i].id}">
                                                    <img src="${recipes[i]._embedded['wp:featuredmedia']['0'].source_url}" alt="${recipes[i].title.rendered}">
                                                    <h3>${recipes[i].title.rendered}</h3>
                                                </a>
                                            </div>`;

            filterVegan.innerHTML = "<b>Vegan</b>";

            sortLatest.innerHTML = "Latest";
            sortAz.innerHTML = "A-Z";
            sortZa.innerHTML = "Z-A";
            filterDairy.innerHTML = "Dairy Free";
            filterGluten.innerHTML = "Gluten Free";
            filterVegetarian.innerHTML = "Vegetarian";


            moreButton.style.display = "block";

        }

    } catch(error) {
        if (recipeContainer.innerHTML = "") {
            recipeContainer.innerHTML = displayError("An error occurred when calling the API");
        } else {
            recipeContainer.innerHTML += displayError("An error occurred fetching all recipes from the API");
        }
        
    }
}

filterVegan.addEventListener("click", getRecipesVegan);

/* FILTER VEGETARIAN */

const filterVegetarian = document.querySelector(".filter-vegetarian");

async function getRecipesVegetarian() {
    try {
        const response = await fetch(url);
        const recipes = await response.json();

        recipeContainer.innerHTML = "";

        for (let i = 0; i < recipes.length; i++) {

            recipeContainer.innerHTML += `<div class="single-recipe">
                                                <a href="recipe.html?id=${recipes[i].id}">
                                                    <img src="${recipes[i]._embedded['wp:featuredmedia']['0'].source_url}" alt="${recipes[i].title.rendered}">
                                                    <h3>${recipes[i].title.rendered}</h3>
                                                </a>
                                            </div>`;

            filterVegetarian.innerHTML = "<b>Vegetarian</b>";

            sortLatest.innerHTML = "Latest";
            sortAz.innerHTML = "A-Z";
            sortZa.innerHTML = "Z-A";
            filterDairy.innerHTML = "Dairy Free";
            filterGluten.innerHTML = "Gluten Free";
            filterVegan.innerHTML = "Vegan";


            moreButton.style.display = "block";

        }

    } catch(error) {
        if (recipeContainer.innerHTML = "") {
            recipeContainer.innerHTML = displayError("An error occurred when calling the API");
        } else {
            recipeContainer.innerHTML += displayError("An error occurred fetching all recipes from the API");
        }
        
    }
}

filterVegetarian.addEventListener("click", getRecipesVegetarian);