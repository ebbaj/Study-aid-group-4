const radioHours = document.getElementById('hours');
const radioPages = document.getElementById('pages');
const radioExercises = document.getElementById('exercises');



    function showInputs(){

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
    } else if (radioExercises.checked){
        document.getElementById('measurement-exercises').required = true;
        document.getElementById('hidden-exercises').style.display = "block"; 
        document.getElementById('hidden-pages').style.display = "none";
        document.getElementById('hidden-hours').style.display = "none";
    }

}
document.getElementById('measureing-type').addEventListener('click', showInputs);

const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
    e.preventDefault();
});

const weekdays = document.getElementById("daysOptions");
const submitBtn = document.getElementById('submitButton');


submitBtn.addEventListener('click', function(e) {
    let daysArray = [];

    weekdays.querySelectorAll("input").forEach(function (input){
        if (input.type === 'checkbox' && input.checked){
            daysArray.push(input.value);
        }
    })

    let activityName = document.getElementById('activity').value;
    console.log(activityName);

    function mType(){
        let calculatedResult = 0;
        if (radioHours.checked){
            let hours = document.getElementById('measurement-hours');
            console.log(hours.value + " hours this week!");
            calculatedResult = parseInt(hours.value) / daysArray.length;
            console.log("You need to " + calculatedResult);
        } else if (radioPages.checked){
            let pages = document.getElementById('measurement-pages');
            console.log("You chose to read " + pages.value + " pages this week!");
            calculatedResult = parseInt(pages.value) / daysArray.length;
            console.log("You need to" + calculatedResult);
        } else if (radioExercises.checked){
            let exercises = document.getElementById('measurement-exercises');
            console.log(exercises.value + "Exercises this week!");
            calculatedResult = parseInt(exercises.value) / daysArray.length;
            console.log("You need to" + calculatedResult);
        }
    }
    mType();

    console.log(daysArray);

});










