

const dateP = document.getElementById('Date_Print_Div')

function GEN_Date() {
// This function is used to select a random date idea from the array "dates" and return the value outside of this function for it to display 

    const dates = ["Picnic at the Park", "Wine & Dine",
    "Hike a Mountain", "Spoken Word Night"]; // CHANGE/ADD DATE IDEAS IN ARRAY 

let PULL_Date = dates[(Math.floor(Math.random() * dates.length))];
// randomizes date idea from dates array and assigns it to the returning variable "PULL_Dates"

let newDate = document.createElement("p"); 
dateP.append(PULL_Date)

} 




    
