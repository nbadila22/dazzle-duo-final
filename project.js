
//EXTROVERT DATE GENERATOR 
const datePDiv = document.getElementById('Date_Print_Div')

function GEN_Date() {
// This function is used to select a random date idea from the array "dates" and return the value outside of this function for it to display 

    const dates = ["Picnic at the Park", "Wine & Dine",
    "Hike a Mountain", "Spoken Word Night"]; // *** CHANGE/ADD DATE IDEAS IN ARRAY 

let PULL_Date = dates[(Math.floor(Math.random() * dates.length))];
// randomizes date idea from dates array and assigns it to the returning variable "PULL_Dates"

document.getElementById("dateP").innerHTML = PULL_Date;



} 

//INTROVERT DATE GENERATOR
const datePDiv2 = document.getElementById('Date_Print_Div2')

function GEN_Date2() {
// This function is used to select a random date idea from the array "dates" and return the value outside of this function for it to display 

    const dates = ["DIY at home Project", "Dink Making Competition",
    "Axe Throwing", "Roller Skating"]; // *** CHANGE/ADD DATE IDEAS IN ARRAY 

let PULL_Date = dates[(Math.floor(Math.random() * dates.length))];
// randomizes date idea from dates array and assigns it to the returning variable "PULL_Dates"

document.getElementById("dateP2").innerHTML = PULL_Date;



} 



document.getElementById("quiz-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const responses = [];
    const formElements = document.querySelectorAll(".question input[type=radio]:checked");

    formElements.forEach(element => {
        responses.push(element.value);
    });

   
});

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
function scrollUpTop(){
    document.querySelector('#head-flo').scrollIntoView({
        behavior: 'smooth'
    });
}
    // SCROLL TO VIBE CHECK SECTION // 
function vibeScroll(){
    document.querySelector('#vibe-check-cont').scrollIntoView({
        behavior: 'smooth'
    });
}

    // SCROLL TO WTM SECTION // 
    function wtmScroll(){
        document.querySelector('#wtm-cont').scrollIntoView({
            behavior: 'smooth'
        });
    }

        // SCROLL TO DINNER GENERATOR SECTION // 
function dinnerScroll(){
    document.querySelector('#drinks-cont').scrollIntoView({
        behavior: 'smooth'
    });
}

function scrollUpTop(){
    window.scrollTo({top: 0, behavior: 'smooth'});
}