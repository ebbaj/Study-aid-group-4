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

/* var removeHiddenPages=document.querySelector("#hidden-pages");
    removeHiddenPages.checked = false;
    var removeHiddenHours=document.querySelector("#hidden-hours");
    removeHiddenHours.checked = false;
    var removeHiddenExercises=document.querySelector("#hidden-exercises");
	removeHiddenExercises.checked = false; */


// function showInput(){
//     if (document.getElementById("hours")) {
//         document.getElementById("hidden-hours").style.display = "block";
//     } else if (document.getElementById("pages")){
//         document.getElementById("hidden-pages").style.display = "block";
//     } 
// }
