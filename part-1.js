function showPages(){
    document.querySelector(".hide").style.display = "none";
    document.getElementById('hidden-pages').style.display = "block";
    document.getElementById('hidden-hours').style.display = "none";
    document.getElementById('hidden-exercises').style.display = "none";
}
function showHours(){
    document.querySelector(".hide").style.display = "none";
    document.getElementById('hidden-hours').style.display = "block";
    document.getElementById('hidden-pages').style.display = "none";
    document.getElementById('hidden-exercises').style.display = "none";
}

function showExercises(){
    document.querySelector(".hide").style.display = "none";
    document.getElementById('hidden-exercises').style.display = "block";
    document.getElementById('hidden-pages').style.display = "none";
    document.getElementById('hidden-hours').style.display = "none";
}



let weekdays = document.getElementById("daysOptions");

document.getElementById('submitButton').addEventListener('click', function(e) {
let daysArray = [];

weekdays.querySelectorAll("input").forEach(function (input){
    if (input.type==='checkbox' && input.checked){
        daysArray.push(input.value);
    }
})

console.log(daysArray);

function activityFun() {
    let activityName = document.getElementById('activity').value;
    console.log(activityName);
}
activityFun();

let mType = document.getElementById("mType");
mType.querySelectorAll('input').forEach(function (input){
    if (input.type === 'radio' && input.checked){
        console.log(input.value);
    }
})

function mTypeAmount() {
    let mAmount = document.getElementById('measurement-goal').value;
    console.log(mAmount);
}
mTypeAmount();



});





 //array or if it is tricky to code then just show hours per day this week.

/* document.getElementById("weekdays").onsubmit=function() {
    mon = parseInt(document.querySelector('input[name = "monday"]:checked').value);
    tue = parseInt(document.querySelector('input[name = "tuesday"]:checked').value);
    wed = parseInt(document.querySelector('input[name = "wednesday"]:checked').value);
    thu = parseInt(document.querySelector('input[name = "thursday"]:checked').value);
    fri = parseInt(document.querySelector('input[name = "friday"]:checked').value);
    sat = parseInt(document.querySelector('input[name = "saturday"]:checked').value);
    sun = parseInt(document.querySelector('input[name = "sunday"]:checked').value);

result = mon + tue + wed + thu + fri + sat + sun;
	
 document.getElementById("grade").innerHTML = result;

 if (result == 2) {result2 = "2 days"};

 document.getElementById("grade2").innerHTML = result2; */

// }
	
  


















