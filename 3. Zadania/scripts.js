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
    myFormValidate(firstname, lastname, state);
    var table = document.getElementById("tabela");
    var lastRow = table.rows.length;
    var row = table.insertRow(lastRow);
    row.insertCell(0).innerHTML = firstname.value;
    row.insertCell(1).innerHTML = lastname.value;
    row.insertCell(2).innerHTML = state.value;
}

function myFormValidate(firstname, lastname, state){    
    document.getElementById("fristname-valerr").style.visibility = "hidden"
    var firstnameVal = true;
    var lastnameVal = true;
    var stateVal = true;
    if(firstname.value == ""){
        firstnameVal.style.visibility = "visible"
        firstname.addClass("redborder")
        var span = document.getElementById("firstname-valerr");
        span.innerHTML = "To pole jest puste";
        span.style = "color: red;"
        firstnameVal = false;
    }
    else{        
        document.getElementById("fristname-valerr").removeClass("redborder")
    }
    if(lastname.value == ""){
        lastname.style = "border: 1px solid red;"
        var span = document.getElementById("lastname-valerr");
        span.innerHTML = "To pole jest puste";
        span.style = "color: red;"
        lastname = false;
    }

    if(state.value == ""){
        state.style = "border: 1px solid red;"
        var span = document.getElementById("state-valerr");
        span.innerHTML = "To pole jest puste";
        span.style = "color: red;"
        stateVal = false;
    }

    if(state.value != ""){
        var mailReg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        stateVal =  state.value.match(mailReg);
        if(!stateVal){
            state.style = "border: 1px solid red;"
            var span = document.getElementById("state-valerr");
            span.innerHTML = "To  niejest dobry mail";
            span.style = "color: red;"
        }
    }

    return firstnameVal && lastnameVal && stateVal;
fac}
