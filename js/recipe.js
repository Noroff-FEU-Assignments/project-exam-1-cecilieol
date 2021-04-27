

const titleContainer = document.querySelector("title");
const modalContainer = document.querySelector(".image-modal");
const breadcrumbContainer = document.querySelector(".current-page")
const closeButton = document.querySelector(".close");
const recipeContainer = document.querySelector(".recipe.container");
const introContainer = document.querySelector(".intro-container");
const nameContainer = document.querySelector(".name-container");
const imageContainer = document.querySelector(".image-container");
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
        breadcrumbContainer.innerHTML = `<p> / ${recipe.title.rendered}</p>`;
        nameContainer.innerHTML = `<h1>${recipe.title.rendered}</h1>`;
        introContainer.innerHTML = `<h3>${recipe.excerpt.rendered}</h3>`;
        imageContainer.innerHTML = `<img src="${recipe._embedded['wp:featuredmedia']['0'].source_url}" alt="recipe-picture">`;
        modalContainer.innerHTML = `<div class="modal-content>
                                    <span class="close">&times;</span>
                                    <img src="${recipe._embedded['wp:featuredmedia']['0'].source_url}" width="100%" alt="recipe-picture">
                                    </div>`;

        instructionContainer.innerHTML = `<p>${recipe.content.rendered}</p>`;

        commentsContainer.innerHTML = `<h2>Comments</h2>
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


imageContainer.onclick = function() {
    modalContainer.style.display = "block";
}

closeButton.onclick = function() {
    modalContainer.style.display = "none";
}

window.onclick = function(e) {
    if(e.target !== modalContainer) {
        modalContainer.style.display = "none";
    }
}




// commentsContainer.innerHTML += `<div class="comment-author">
//                                     <h3>${recipe._embedded.replies[0].author_name}</h3>
//                                 </div>
//                                 <div class="comment-content">
//                                     <p>${recipe._embedded.replies[0].content.rendered}</p>
//                                 </div>
//                                 <div class="comment-date">
//                                     <p>${recipe._embedded.replies[0].date}</p>
//                                 </div>`;

