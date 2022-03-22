
function appendFunktion(zeichen){
    document.getElementById("ergebnisArea").innerHTML += zeichen;
}

function berechnen(){
    let inhaltArea = document.getElementById("ergebnisArea");
    let ergebnis = eval(inhaltArea.innerHTML);

    inhaltArea.innerHTML = ergebnis;
}

function deleteLast(){
    let inhaltArea = document.getElementById("ergebnisArea");
    inhaltArea.innerHTML = inhaltArea.innerHTML.slice(0, -1);
}

function deleteAll(){
    let inhaltArea = document.getElementById("ergebnisArea");
    inhaltArea.innerHTML = "";
}
