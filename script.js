const form = document.getElementById("form");
const scoreDiv = document.getElementById("hidden");
const scorep = document.getElementById("scorep");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    scoreDiv.style.display = "block";

    const a1 = document.getElementById("q1").value;
    const a2 = document.getElementById("q2").value;
    const a3 = document.getElementById("q3").value;
    const a4 = document.getElementById("q4").value;
    const a5 = document.getElementById("q5").value;

    var numRight = 0

    if (a1 == "10") {
        numRight ++
    }
    if (a2 == "120") {
        numRight ++
    }
    if (a3 == "28") {
        numRight ++
    }
    if (a4 == "5") {
        numRight ++
    }
    if (a5 == "3") {
        numRight ++
    }


    scorep.textContent = `${numRight}/5 correct`


    
});