//Selectors
const submitBtn = document.querySelector(".submit-session");
const progressBar = document.querySelector('.progress-bar');
const list = document.querySelector(".inputList");

let loadInfo = JSON.parse(localStorage.getItem('data'));
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

function doFirst() {   
    display();
}

submitBtn.addEventListener("click", storeSession);
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

 


