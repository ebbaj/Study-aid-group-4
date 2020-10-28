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
    localStorage.setItem('days', daysCount);
    localStorage.setItem('pages', pageCount);
    localStorage.setItem('book', bookTitle);
    displayBook();
}


// ------------------- THIS IS WHERE PART-2 JS STARTS -------------------

//Selectors
const submit2Btn = document.querySelector(".submit-session");
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
            removeButton.addEventListener('click', deleteHabit)

            inputItem.innerText = "Date: " + item.date + "\n" + "Activity: " + "\n" + "Amount: " +  item.sessionAmount + "\n" + "Learning: ";
            list.appendChild(inputItem);
            const comment = document.createElement('span')
            console.log(comment)
            comment.innerText =  item.sessionComment
            inputItem.appendChild(comment)

            inputItem.appendChild(removeButton);
            
            changeTextItems();
            moveProgressBar();

        }
    }
}

let sessionInfo;

submit2Btn.addEventListener("click", storeSession);

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
    removeButton.addEventListener('click', deleteHabit)

    inputItem.innerText = "Date: " + sessionInfo.date + "\n" + "Activity: " + "\n" + "Amount: " + sessionInfo.sessionAmount + "\n" + "Learning: ";
    list.appendChild(inputItem);
    const comment = document.createElement('span')
    console.log(comment)
    comment.innerText =  sessionInfo.sessionComment
    inputItem.appendChild(comment)
    inputItem.appendChild(removeButton);

    changeTextItems();
    moveProgressBar();

}

function deleteHabit(e) {
    let name = e.target.parentNode.children[3].innerText
    loadInfo = loadInfo.filter(habit => {
        return name !== habit.sessionComment
    })
    save()
    e.target.parentNode.remove()
    
}

function deleteInput(i) {
    const inputItem = document.querySelector("li");
    loadInfo.splice(i, 1);
    localStorage.clear()

    inputItem.remove();
    save();
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

moveProgressBar();

//Test to update innerHTML of text items - maybe make this into reCalc() function?
function changeTextItems() {
    let weeklyNumber = 50; //temporary values, will be based on userInput later on
    let dailyNumber = 30;
    document.querySelector(".weeklyGoal").innerHTML = "Finish " + weeklyNumber + " pages everyday";
    document.querySelector(".todaysGoal").innerHTML = "Read " + dailyNumber + " pages";
}

function displayBook() {
    let book = localStorage.getItem('book');
    document.querySelector(".current-book").innerHTML = `You're currently reading ${book}`;
}

