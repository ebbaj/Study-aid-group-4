// -------------------THIS IS WHERE PART-1 JS STARTS-------------------
const radioHours = document.getElementById('hours');
const radioPages = document.getElementById('pages');
const radioExercises = document.getElementById('exercises');



    function showInputs(){

     if (radioHours.checked){
         document.getElementById('measurement-hours').required = true;
        document.getElementById('hidden-hours').style.display = "block";
        document.getElementById('hidden-pages').style.display = "none";
        document.getElementById('hidden-exercises').style.display = "none";
    } else if (radioPages.checked) {
        document.getElementById('measurement-pages').required = true;
        document.getElementById('hidden-pages').style.display = "block"; 
        document.getElementById('hidden-hours').style.display = "none";
        document.getElementById('hidden-exercises').style.display = "none";
    } else if (radioExercises.checked){
        document.getElementById('measurement-exercises').required = true;
        document.getElementById('hidden-exercises').style.display = "block"; 
        document.getElementById('hidden-pages').style.display = "none";
        document.getElementById('hidden-hours').style.display = "none";
    }

}

document.getElementById('measureing-type').addEventListener('click', showInputs);

const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
    e.preventDefault();
});

const weekdays = document.getElementById("daysOptions");
const submit1Btn = document.getElementById('submitButton');


submit1Btn.addEventListener('click', function(e) {
    let daysArray = [];

    weekdays.querySelectorAll("input").forEach(function (input){
        if (input.type === 'checkbox' && input.checked){
            daysArray.push(input.value);
        }
    })

    let activityName = document.getElementById('activity').value;
    console.log(activityName);

    function mType(){
        let calculatedResult = 0;
        if (radioHours.checked){
            let hours = document.getElementById('measurement-hours');
            console.log(hours.value + " hours this week!");
            calculatedResult = parseInt(hours.value) / daysArray.length;
            console.log("You need to " + calculatedResult);
        } else if (radioPages.checked){
            let pages = document.getElementById('measurement-pages');
            console.log("You chose to read " + pages.value + " pages this week!");
            calculatedResult = parseInt(pages.value) / daysArray.length;
            console.log("You need to" + calculatedResult);
        } else if (radioExercises.checked){
            let exercises = document.getElementById('measurement-exercises');
            console.log(exercises.value + "Exercises this week!");
            calculatedResult = parseInt(exercises.value) / daysArray.length;
            console.log("You need to" + calculatedResult);
        }
    }
    mType();

    console.log(daysArray);

});


// ------------------- THIS IS WHERE PART-2 JS STARTS -------------------

//Selectors
const submit2Btn = document.querySelector(".submit-session");
const progressBar = document.querySelector('.progress-bar');
const list = document.querySelector(".inputList");

//let loadInfo = JSON.parse(localStorage.getItem('data'));

let loadInfo
loadData()

function loadData () {
  if (localStorage.getItem('data')) {
    loadInfo = JSON.parse(localStorage.getItem('data'))
  } else {
    loadInfo = []
  }
}

loadPreExisting();
function save() {
    localStorage.setItem('data', JSON.stringify(loadInfo));
}

function loadPreExisting() {
    for(let item of loadInfo) {
        if(item) {
            const inputItem = document.createElement("li");
            const removeButton = document.createElement("button");
            removeButton.innerText = "Remove";

            inputItem.innerText = "Date: " + item.date + "\n" + "Activity: " + "\n" + "Amount: " + item.sessionAmount + "\n" + "Learning: " + item.sessionComment;
            list.appendChild(inputItem);
            inputItem.appendChild(removeButton);
        }
    }
}
let sessionInfo;

//Variables - userGoal and userInput are temporary variables to test the progress bar
let userGoal = 100;
let userInput = 60; /* 55-58 gets decimals, fix this bug */

submit2Btn.addEventListener("click", storeSession);
//Functions
function storeSession(event){ 
    event.preventDefault(); 

    sessionInfo = {
    'date': new Date().toISOString().slice(0, 10),
    'sessionAmount': document.getElementById('session-amount').value,
    'sessionComment': document.getElementById('session-learnings').value
    }

    loadInfo.push(sessionInfo);
    save();
    const inputItem = document.createElement("li");
    const removeButton = document.createElement("button");
    removeButton.innerText = "Remove";

    inputItem.innerText = "Date: " + sessionInfo.date + "\n" + "Activity: " + "\n" + "Amount: " + sessionInfo.sessionAmount + "\n" + "Learning: " + sessionInfo.sessionComment;
    list.appendChild(inputItem);
    inputItem.appendChild(removeButton);
}

function moveProgressBar() {
    let progress = userInput / userGoal;
    let finalP = progress * 100;
    progressBar.style.width = finalP + '%';
    progressBar.innerHTML = `${finalP}%`;
}

moveProgressBar();

 



