// modal Window 
function formModal() {
    document.addEventListener('click', function (event) {
        event = window.event;
        const target = event.target ;
        if (target.hasAttribute('data-form') && target.getAttribute('data-form') == 'modal') {
            if (target.hasAttribute('data-target')) {
                const m_ID = target.getAttribute('data-target');
                document.getElementById(m_ID).classList.add('open');
                event.preventDefault();
            }
        }
  
        if ((target.hasAttribute('data-dismiss') && target.getAttribute('data-dismiss') == 'modal') || target.classList.contains('modal')) {
            const modal = document.querySelector('[class="modal open"]');
            modal.classList.remove('open');
            event.preventDefault();
        }
    }, false);
  }
  
formModal();




// -------------------THIS IS WHERE PART-1 JS STARTS-------------------

const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
    e.preventDefault();
});


const submitBtn = document.getElementById('submitButton');

submitBtn.addEventListener('click', getInputs) 

function getInputs(){
    let daysCount = document.querySelector('#days').value;
    let pageCount = document.querySelector('#pages').value;
    let bookTitle = document.querySelector('#book-title').value;
    console.log(daysCount);
    console.log(pageCount);
    console.log(bookTitle);
}


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