const progressBar = document.querySelector('.progress-bar');
const submitBtn = document.querySelector('.submit-session');
const sessionAmount = document.getElementById('session-amount').value;
const sessionLearnings = document.getElementById('session-learnings').value;

let userGoal = 100;
let userInput = 73;

let sessionHistory = {
    amountStudied: sessionAmount,
    comment: sessionLearnings,
}



submitBtn.addEventListener('click', submitForm);

function submitForm(){
    console.log("Hello");
    console.log(sessionHistory);
}


function moveProgressBar() {
    let progress = userInput / userGoal;
    let finalP = progress * 100;
    progressBar.style.width = finalP + '%';
    progressBar.innerHTML = `${finalP}%`;
}

moveProgressBar();



