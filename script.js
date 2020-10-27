//Selectors
const submitBtn = document.querySelector(".submit-session");
const progressBar = document.querySelector('.progress-bar');
const list = document.querySelector(".inputList");

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
            
            changeTextItems();
            moveProgressBar();

            removeButton.addEventListener('click', () => {            
                inputItem.remove();
            });
            

        }
    }
}

let sessionInfo;

submitBtn.addEventListener("click", storeSession);

//Functions
function storeSession(event){ 
    event.preventDefault(); 

    sessionInfo = {
    'date': new Date().toISOString().slice(0, 10),
    'sessionAmount': document.getElementById('session-amount').value,
    'sessionComment': document.getElementById('session-learnings').value,
    'weeklyGoal': document.querySelector('.weeklyGoal').innerHTML,
    'dailyGoal': document.querySelector('.todaysGoal').innerHTML,
    'progressBar': document.querySelector('.progress-bar'),
    }

    loadInfo.push(sessionInfo);
    save();
    const inputItem = document.createElement("li");
    const removeButton = document.createElement("button");
    removeButton.innerText = "Remove";

    inputItem.innerText = "Date: " + sessionInfo.date + "\n" + "Activity: " + "\n" + "Amount: " + sessionInfo.sessionAmount + "\n" + "Learning: " + sessionInfo.sessionComment;
    list.appendChild(inputItem);
    inputItem.appendChild(removeButton);

    changeTextItems();
    moveProgressBar();
    

    removeButton.addEventListener('click', () => {
        inputItem.remove();
    }); 
}

function moveProgressBar() {
    //Variables - userGoal and userInput are temporary variables to test the progress bar
    let userGoal = 100;
    let userInput = 80; /* 55-58 gets decimals, fix this bug */

    let progress = userInput / userGoal;
    let finalP = progress * 100;
    progressBar.style.width = finalP + '%';
    progressBar.innerHTML = `${finalP}%`;
}



//Test to update innerHTML of text items - maybe make this into reCalc() function?
function changeTextItems() {
    let weeklyNumber = 50; //temporary values, will be based on userInput later on
    let dailyNumber = 30;
    document.querySelector(".weeklyGoal").innerHTML = "Finish " + weeklyNumber + " pages everyday";
    document.querySelector(".todaysGoal").innerHTML = "Read " + dailyNumber + " pages";
}


