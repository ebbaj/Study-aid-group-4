
function showInputs(){

    const radioHours = document.getElementById('hours');
    const radioPages = document.getElementById('pages');
    const radioExercises = document.getElementById('exercises');

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
    } else if (radioExercises.checked) {
        document.getElementById('measurement-exercises').required = true;
        document.getElementById('hidden-exercises').style.display = "block"; 
        document.getElementById('hidden-pages').style.display = "none";
        document.getElementById('hidden-hours').style.display = "none";
    }

}
document.getElementById('measureing-type').addEventListener('click', showInputs);



let weekdays = document.getElementById("daysOptions");
let daysArray = [];

function days() {
    weekdays.querySelectorAll("input").forEach(function (input){
        if (input.type ==='checkbox' && input.checked){
            daysArray.push(input.value);
        }
    })
    const submitBtn = document.getElementById('submitButton');
    console.log(daysArray); 
    submitBtn.addEventListener('click', days, function(ev){
    ev.preventDefault()
});
}

function activityFun() {
    let activityName = document.getElementById('activity').value;
    console.log(activityName);
}
activityFun();


function mTypeAmount() {
    const form = document.forms[0];
    const selectElement = form.querySelector('input[name="amount"]');

    let mAmount = selectElement.value;
    console.log(mAmount);
}
mTypeAmount();



// });





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
	
  


















