let counter = 0; 

updateCounter()
setInterval('updateCounter()', 1000)

function updateCounter() {
    counter++
    document.getElementById("counter").innerHTML = counter;
}


function helloAlert(info) {
    window.alert("INFO FRÅN WEBBSIDAN: " + info + "!");
}

function helloConsole(info) {
    console.log("INFO FRÅN WEBBSIDAN: " + info + "!");
}