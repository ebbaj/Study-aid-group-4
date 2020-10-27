//Selectors
const submitBtn = document.querySelector(".submit-session");
const progressBar = document.querySelector('.progress-bar');
const list = document.querySelector(".inputList")

//Variables - userGoal and userInput are temporary variables to test the progress bar.
let userGoal = 100;
let userInput = 60; /* 55-58 gets decimals, fix this bug */

//Event Listeners
submitBtn.addEventListener("click", storeSession);

//Functions
function storeSession(event){ 
    event.preventDefault(); 

    let sessionInfo = {
        'sessionAmount': document.getElementById('session-amount').value,
        'sessionComment': document.getElementById('session-learnings').value
    }

    let old_data = JSON.parse(localStorage.getItem('data'));
    if(!(old_data instanceof Array))
    old_data = [old_data];
    old_data.push(sessionInfo);
    localStorage.setItem('data', JSON.stringify(old_data));
    console.log(old_data);

    
    const inputItem = document.createElement("li");
    const removeButton = document.createElement("button");
    removeButton.innerText = "Remove";
    inputItem.innerText = "Date: " + "\n" + "Activity: " + "\n" + "Amount: " + sessionInfo.sessionAmount + "\n" + "Learning: " + sessionInfo.sessionComment;
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

 


