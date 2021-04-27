/* API CALL */

const url = "https://cecilieol.no/the-green-kitchen/wp-json/wp/v2/posts?_embed";

const latestContainer = document.querySelector(".latest-slides");
const arrowContainer = document.querySelector(".arrow-container");
const dotContainer = document.querySelector(".dot-container");

async function getLatest() {
    try {
        const response = await fetch(url);
        const recipe = await response.json();

        console.log(recipe);

        latestContainer.innerHTML = "";

        for (let i = 0; i < recipe.length; i++) {

            console.log(recipe[i].name);

            latestContainer.innerHTML += `<div class="latest-item">
                                                <a href="recipe.html?id=${recipe[i].id}">
                                                    <img src="${recipe[i]._embedded['wp:featuredmedia']['0'].source_url}" alt="recipe-picture">
                                                    <h2>${recipe[i].title.rendered}</h2>
                                                </a>
                                            </div>`;

            arrowContainer.innerHTML = `<button class="prev" onclick="prevSlide(-1)">&#10094;</button>
                                        <button class="next" onclick="nextSlide(1)">&#10095;</button>`;
            
            dotContainer.innerHTML = `<span class="dot active" onclick="currentSlide(1)"></span>
                                      <span class="dot" onclick="currentSlide(2)"></span>
                                      <span class="dot" onclick="currentSlide(3)"></span>
                                      <span class="dot" onclick="currentSlide(4)"></span>`;

            if (i === 3) {
                break;
            }

        }

    } catch(error) {
        console.log(error);
        if (latestContainer.innerHTML = "") {
            latestContainer.innerHTML = displayError("An error occurred when calling the API");
        } else {
            latestContainer.innerHTML += displayError("An error occurred fetching all recipes from the API");
        }
        
    }
}

getLatest();


/* SLIDESHOW */

var slideIndex = 1;
showSlides(slideIndex);

// Next
function nextSlide(n) {
  showSlides(slideIndex += n);
}

// Prev
function prevSlide(n) {
    showSlides(slideIndex += n);
  }

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.querySelectorAll(".latest-item");
  var dots = document.querySelectorAll(".dot");

  if (n > slides.length) {
      slideIndex = 1;
    } 

  if (n < 1) {
      slideIndex = slides.length;
    }

  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }

  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}