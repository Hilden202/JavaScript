let method = "add"

function calculate() {
    let tal1 = parseInt(document.getElementById("tal1").value);
    let tal2 = parseInt(document.getElementById("tal2").value);

    if (method === "add") {
        document.getElementById("resultat").innerHTML = (tal1 + tal2);
    }
    else if (method === "multiply") {
        document.getElementById("resultat").innerHTML = (tal1 * tal2);
    }


}
function clearFields() {
    document.getElementById("tal1").value = "";
    document.getElementById("tal2").value = "";
    document.getElementById("resultat").innerHTML = "0";
}

function change()
{
    method = document.getElementById("multiply").checked ? "multiply" : "add";
    if(method === "multiply") {
        document.getElementById("operator").innerHTML = " * ";
    }
    else {
        document.getElementById("operator").innerHTML = " + ";
    }

}

function changedate(date)
{
    document.getElementById("date2").setAttribute("min", date);
}

function changeImage(width)
{
    const imageElement = document.getElementById("bilen");
    imageElement.setAttribute("width", width);
    document.getElementById("price").innerHTML = width * 2500;
}

function changeColor(color) {
    document.body.style.backgroundColor = color
}