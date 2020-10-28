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

window.onload = function() {
    displayStoredGoal();
}

const submitBtn = document.getElementById('submitButton');

submitBtn.addEventListener('click', getInputs) 

function getInputs(){
    let daysCount = document.querySelector('#days').value;
    let pageCount = document.querySelector('#pages').value;
    let bookTitle = document.querySelector('#book-title').value;
    localStorage.setItem('days', daysCount);
    localStorage.setItem('pages', pageCount);
    localStorage.setItem('book', bookTitle);
    localStorage.setItem('pagesLeft', 0);
    displayStoredGoal();
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
            

            // moveProgressBar();


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

    moveProgressBar();

    let currentGoal = localStorage.getItem('pages');
    let recalculatedGoal = parseInt(currentGoal) - parseInt(sessionInfo.sessionAmount);
    localStorage.setItem("pagesLeft", recalculatedGoal);

    let pagesLeft = localStorage.getItem('pagesLeft');

    
    if (parseInt(pagesLeft) === 0 || pagesLeft === "0") {
        let currentGoal = localStorage.getItem('pages');
        let recalculatedGoal = parseInt(currentGoal) - parseInt(sessionInfo.sessionAmount);
        localStorage.setItem("pagesLeft", recalculatedGoal);
    } else {
        let recalculatedGoal = parseInt(pagesLeft) - parseInt(sessionInfo.sessionAmount);
        localStorage.setItem("pagesLeft", recalculatedGoal);
    }

    displayStoredGoal();
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
    let totalPages = localStorage.getItem('pages');
    let recalculPages = localStorage.getItem('pagesLeft');
    let progress = parseInt(recalculPages) / parseInt(totalPages);
    let reversProgress = 1 - progress;
    let finalP = Math.floor(reversProgress * 100);
    if (finalP < 0 ) {
        progressBar.innerHTML = `0%`;
    } else if (finalP < 5 ) {
        progressBar.innerHTML = `${finalP}%`;
        progressBar.style.width = "10%";
    } else {
        progressBar.style.width = finalP + '%';
        progressBar.innerHTML = `${finalP}%`;
    }
}

moveProgressBar();

function displayStoredGoal() {
    let book = localStorage.getItem('book');
    if (book === undefined || book === null || book === '') {
        document.querySelector(".current-book").innerHTML = `No book title found, go back and start a new book!`;
    } else {
        document.querySelector(".current-book").innerHTML = `You're currently reading: ${book}`;
    }

    let totalPages = localStorage.getItem('pages');
    let totalDays = localStorage.getItem('days');
    let calculatedGoal = parseInt(totalPages) / parseInt(totalDays);

    if (totalPages === undefined || totalPages === null || totalPages === '' && totalDays === undefined || totalDays === null || totalDays === '') {
     document.querySelector(".calculated-goal").innerHTML = `We are missing information about either days or pages. Please go back and add those in "Start a book".`;
    } else {
        // Keep the parseInt(calculatedGoal) here otherwise it will show the precise claculation like 345 / 34 = 10.147058823529411
        document.querySelector(".calculated-goal").innerHTML = "To meet you goal you need to read approximently " + parseInt(calculatedGoal) + " pages everyday.";
    }

    let pagesLeft = localStorage.getItem('pagesLeft')
        if (book === undefined || book === null || book === '') {
         document.querySelector(".pages-left").innerHTML = " ";
        } else if (pagesLeft === 0 || pagesLeft === "0") {
        document.querySelector(".pages-left").innerHTML = "You have " + parseInt(totalPages) + " pages left to finish your book.";
         } else {
        document.querySelector(".pages-left").innerHTML = "You have " + parseInt(pagesLeft) + " pages left to finish your book.";
         }
    moveProgressBar();
}
