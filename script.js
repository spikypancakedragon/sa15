const button = document.getElementById("button")

const scoreDiv = document.getElementById("hidden");
const scorep = document.getElementById("scorep");

button.addEventListener("click", function(event) {
    event.preventDefault();
    
    numRight = 0
    var rightAnswers = document.getElementsByClassName("right")
    for (i = 0; i < rightAnswers.length; i++) {
        if (rightAnswers[i].checked) {
            numRight ++
        }
    }

    const numQs = document.getElementsByTagName("section").length
    scorep.textContent = `${numRight}/${numQs} correct`
    
});