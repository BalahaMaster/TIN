function validateClient(){
    console.log("Validating Firstname:");
    var title = document.getElementById("firstname-input");
    var titleErr = document.getElementById("firstname-error");
    var titleVal;

    titleVal = validateStringNotEmpty(title.value);
    if(titleVal){
        elementValidationOk(title);        
        elementAddText(titleErr, "");
    } 
    else{
        elementValidationError(title);
        elementAddText(titleErr, "Imię nie może być puste");
    } 


    
}

function validateStringNotEmpty(text){
    console.log("validating if string '" + text + "' is empty");
    return text === "" ? false : true;
}

function validateIfNumber(text){
    var reg = /\d*/;
    return text.match(reg);
}

function elementValidationError(element){
    element.classList.add("input-notvalid");
}

function elementValidationOk(element){
    console.log("Validation ok");
    element.classList.remove("input-notvalid");
}

function elementAddText(element, text){
    console.log("Adding '" + text + "' to element " + element.id);
    element.innerHTML = text;
}
