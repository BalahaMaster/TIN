function temp_convertion(){
    var amount = document.getElementById("input-data")
    var temp = document.getElementById("input-temp")
    var result;
    if(temp.value == "C"){
        result = (amount.value*(9/5)) + 32 + "F";
    }
    if(temp.value == "F"){
        result = (amount.value-32) * (5/9) + "C";    
    }
    document.getElementById("result").innerHTML = result;
}

function paragraph_delay(){
    document.getElementById("zajebisty-paragraf").style.visibility = "visible";
}

function add_person(firstname, lastname, state){
    var table = document.getElementById("tabela");
    var lastRow = table.rows.length;
    var row = table.insertRow(lastRow);
    row.insertCell(0).innerHTML = firstname.value;
    row.insertCell(1).innerHTML = lastname.value;
    row.insertCell(2).innerHTML = state.value;
}