
//EXTROVERT DATE GENERATOR 
const datePDiv = document.getElementById('Date_Print_Div')

function GEN_Date() {
    // This function is used to select a random date idea from the array "dates" and return the value outside of this function for it to display 

    const dates = ["Go To A Concert or Festival", "Go To An Amusement Park",
        "Go Dancing", "Roller Skate Night", "Couple Workout Day", "Chill At A Lounging Area"];  

    let PULL_Date = dates[(Math.floor(Math.random() * dates.length))];
    // randomizes date idea from dates array and assigns it to the returning variable "PULL_Dates"

    document.getElementById("dateP").innerHTML = PULL_Date;



}

//INTROVERT DATE GENERATOR
const datePDiv2 = document.getElementById('Date_Print_Div2')

function GEN_Date2() {
    // This function is used to select a random date idea from the array "dates" and return the value outside of this function for it to display 

    const dates = ["Build Your Own Garden", "Go On An",
        "Axe Throwing", "Roller Skating"]; // *** CHANGE/ADD DATE IDEAS IN ARRAY 

    let PULL_Date = dates[(Math.floor(Math.random() * dates.length))];
    // randomizes date idea from dates array and assigns it to the returning variable "PULL_Dates"

    document.getElementById("dateP2").innerHTML = PULL_Date;



}



// document.getElementById("quiz-form").addEventListener("submit", function (event) {
//     event.preventDefault();

    const responses = [];
    const formElements = document.querySelectorAll(".question input[type=radio]:checked");

    formElements.forEach(element => {
        responses.push(element.value);
    });


// });

function analyzePersonality() {
    // Where values are retrieved
    const responses = {
        q1: document.querySelector('input[name="q1"]:checked').value,
        q2: document.querySelector('input[name="q2"]:checked').value,
        q3: document.querySelector('input[name="q3"]:checked').value,
        q4: document.querySelector('input[name="q4"]:checked').value,
        q5: document.querySelector('input[name="q5"]:checked').value
    };

    // Where we calculated the yes and no count
    const yesCount = Object.values(responses).filter(response => response === "Yes").length;
    const noCount = Object.values(responses).filter(response => response === "No").length;

    // function to determine personality type by tallying up values of yes and no
    let personality = "";
    if (yesCount > noCount) {
        personality = "Introvert";
    } else if (noCount > yesCount) {
        personality = "Extrovert";
    } else {
        personality = "Mix of Both";
    }

    // Where we display the personality result
    const resultElement = document.getElementById("result");
    resultElement.innerHTML = `<p>Your personality type: ${personality}</p>`;
}

// SCROLL TO DINNER GENERATOR SECTION // 
function scrollUpTop() {
    document.querySelector('#head-flo').scrollIntoView({
        behavior: 'smooth'
    });
}
// SCROLL TO VIBE CHECK SECTION // 
function vibeScroll() {
    document.querySelector('#vibe-check-cont').scrollIntoView({
        behavior: 'smooth'
    });
}

// SCROLL TO WTM SECTION // 
function wtmScroll() {
    document.querySelector('#wtm-cont').scrollIntoView({
        behavior: 'smooth'
    });
}

// SCROLL TO DINNER GENERATOR SECTION // 
function dinnerScroll() {
    document.querySelector('#drinks-cont').scrollIntoView({
        behavior: 'smooth'
    });
}

function scrollUpTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// hien api test

// script.js

// script.js

const apiKey = '1'; 
const apiUrl = 'https://www.themealdb.com/api/json/v1/1/random.php';

function clickRecipe(){
const generateButton = document.getElementById('generateButton');
const recipeContainer = document.getElementById('recipeContainer');
console.log("generateButton; ", generateButton)
// generateButton.addEventListener('click', () => {
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const recipe = data.meals[0];

            // Update the content of the recipeContainer
            recipeContainer.innerHTML = `
            <div class="recipe-box">
                <h2>${recipe.strMeal}</h2>
                <img src="${recipe.strMealThumb}" alt="${recipe.strMeal}" />
                <p>${recipe.strInstructions}</p>
            </div>
        `;
        })
        .catch(error => {
            console.error('Error fetching recipe:', error);
        });
};
// }
document.addEventListener("DOMContentLoaded", function() {
    const generateButton1 = document.getElementById("generateButton1");
    const wineInfo = document.getElementById("wineInfo");
    const apiKey = "19167b5ae4f3486fa25186b366e91b55";

    generateButton1.addEventListener("click", async () => {
        try {
            const response = await fetch(`https://api.spoonacular.com/food/wine/recommendation?apiKey=19167b5ae4f3486fa25186b366e91b55&wine=merlot`, {
                method: "GET",
                headers: {
                    "Accept": "application/json"
                }
            });

            if (!response.ok) {
                throw new Error("Failed to fetch wine data");
            }

            const data = await response.json();
            const randomWine = data.recommendedWines[Math.floor(Math.random() * data.recommendedWines.length)];
            displayWineInfo(randomWine);
        } catch (error) {
            console.error(error);
            wineInfo.innerHTML = "An error occurred while fetching data.";
        }
    });

    function displayWineInfo(wine) {
        const wineName = wine.title;
        const description = wine.description;

        const html = `
            <h2>${wineName}</h2>
            <p>${description}</p>
        `;

        wineInfo.innerHTML = html;
    }
});

$('.clockpicker').clockpicker();



