//Selectors
const submitBtn = document.querySelector(".submit-session");
const progressBar = document.querySelector('.progress-bar');
//let submitBtn = document.getElementById('submit-session');
let sessionAmount = document.getElementById('session-amount');
let sessionLearnings = document.getElementById('session-learnings');

//Variables - userGoal and userInput are temporary variables to test the progress bar.
let userGoal = 100;
let userInput = 60; /* 55-58 gets decimals, fix this bug */

let nbrKey = "Number";
let cmtKey = "Comment";


//Event Listeners
submitBtn.addEventListener("click", storeSession);

//Functions
function storeSession(event){ 
    event.preventDefault(); 
    
    let sValue = sessionAmount.value;
    let sComment = sessionLearnings.value;

    let i = localStorage.length;

    if(localStorage.length == 0) {
        //let i = 0;
        i++;
        nbrKey = "Number";
        cmtKey = "Comment";

        nbrKey = nbrKey + i;
        cmtKey = cmtKey + i;

        localStorage.setItem(nbrKey, sValue);
        localStorage.setItem(cmtKey, sComment);
        console.log(localStorage);
    } else {
       
        i++;
        nbrKey = "Number";
        cmtKey = "Comment";

        nbrKey = nbrKey + i;
        cmtKey = cmtKey + i;

        localStorage.setItem(nbrKey, sValue);
        localStorage.setItem(cmtKey, sComment);
        console.log(localStorage);
    }
}

function moveProgressBar() {
    let progress = userInput / userGoal;
    let finalP = progress * 100;
    progressBar.style.width = finalP + '%';
    progressBar.innerHTML = `${finalP}%`;
}

moveProgressBar();

 


