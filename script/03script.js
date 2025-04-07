let term1 = 3;
let term2 = 9;
drawTable()

function changeTerm1(term1Value) {
   term1 = term1Value;
    drawTable()
}
function changeTerm2(term2Value) {
    term1 = term2Value;
     drawTable()
 }


function drawTable(){
    let table = "<table border='1'>";
    for(let t1 = 1; t1 <= term1; t1++)
        {
            table += "<tr>";
            for(let t2 = 1; t2 <= term2; t2++)
                {
                    table += "<td>" + (t1 * t2) + "</td>";
                }
            table += "</tr>";
        }
    table += "</table>";
    document.getElementById("tabellen").innerHTML = table;

}