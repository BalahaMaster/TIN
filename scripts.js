function validateClient(){
    console.log("Validating Firstname:");
    var firstname = document.getElementById("firstname-input");
    var firstnameErr = document.getElementById("firstname-error");
    var emptyFirstNameMsg = "Imię nie może być puste";
    elementClearText(firstnameErr);
    emptyStringValidation(firstname, firstnameErr, emptyFirstNameMsg);

    var lastname = document.getElementById("lastname-input");
    var lastnameErr = document.getElementById("lastname-error");
    var emptyLastNameMsg = "Nazwisko nie może być puste";
    elementClearText(lastnameErr);
    emptyStringValidation(lastname, lastnameErr, emptyLastNameMsg);

    var birthDate = document.getElementById("birthdate-input");
    var birthDateErr = document.getElementById("birthdate-error");
    var emptyBirthDateMsg = "Data urodzenia nie może być pusta";
    elementClearText(birthDateErr);
    emptyStringValidation(birthDate, birthDateErr, emptyBirthDateMsg)
    if(dateFormatValidation(birthDate, birthDateErr, "Podaj datę w następującym formacie: 2019(rok)-01(miesiąć)-01(dzień)")){
        var legalDate = new Date();
        legalDate.setFullYear(legalDate.getFullYear() - 18);
        console.log(legalDate);
        if(legalDate < new Date(birthDate.value)){
            elementValidationError(birthDate);
            elementAddText(birthDateErr, "Klient musi mieć przynajmniej 18 lat");
        }
    }

    var email = document.getElementById("email-input");
    var emailErr = document.getElementById("email-error");
    elementClearText(emailErr);
    emailValidation(email, emailErr);
}

function validateBook(){
    var title = document.getElementById("title-input");
    var titleErr = document.getElementById("title-error");
    elementClearText(titleErr);
    emptyStringValidation(title, titleErr, "Tytuł nie może być pusty")

    var isbn = document.getElementById("isbn-input");
    var isbnErr = document.getElementById("isbn-error");
    elementClearText(isbnErr);
    emptyStringValidation(isbn, isbnErr, "ISBN nie może być pusty")

    var releaseDate = document.getElementById("release-date-input");
    var releaseDateErr = document.getElementById("release-date-error");
    elementClearText(releaseDateErr);
    emptyStringValidation(releaseDate, releaseDateErr, "Data wydania nie może być pusta");
    if(dateFormatValidation(releaseDate, releaseDateErr, "Podaj datę w następującym formacie: 2019(rok)-01(miesiąć)-01(dzień)")){
        if(new Date(releaseDate.value) > Date.now()){
            elementValidationError(releaseDateErr);
            elementAddText("Data wydania nie może być większa od daty dzisiejszej");
        }
    }

    var price = document.getElementById("price-input");
    var priceErr = document.getElementById("price-error");
    elementClearText(priceErr);
    emptyStringValidation(price, priceErr, "Cena nie może być pusta");
    positiveNumberValidation(price, priceErr);

    var authors = document.getElementById("authors");
    var authorsErr = document.getElementById("table-authors-error");
    elementClearText(authorsErr);
    console.log(authors.rows.length);
    if(authors.rows.length < 2){
        elementValidationError(authors);
        elementAddText(authorsErr, "Ksiązka musi posiadać przynajmniej jednego autora");
    }

    var copies = document.getElementById("copies");
    var copiesErr = document.getElementById("copies-error");
    elementClearText(copiesErr);
    console.log(copies.rows.length);
    if(copies.rows.length < 2){
        elementValidationError(copies);
        elementAddText(copiesErr, "Ksiązka musi posiadać przynajmniej jeden egzemplarz");
    }
}

function positiveNumberValidation(element, errorElement){
    
    var number = element.value;

    console.log(number);

    var reg = /(?<!.)([0-9]+|[0-9]+\.{1}[0-9]+)(?!.)/

    var matches = number.match(reg);

    if(matches == false || matches == null){
        elementValidationError(element);
        elementAddText(errorElement, "Podana liczba może zawierać tylko liczby naturalne i może być rozdzielona kropką");
        return false;
    }
    
    number = parseFloat(number);

    if(isNaN(number)){
        elementValidationError(element);
        elementAddText(errorElement, "Podaj liczbę w formacie '3.14' bądź '1'");
    }
    
    if(number < 0){
        elementValidationError(element);
        elementAddText(errorElement, "Liczba musi być większa od zera");
    }
}

function emailValidation(inputElement, errorElement){

    var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(!inputElement.value.match(regex)){
        elementValidationError(inputElement);
        elementAddText(errorElement, "Niepoprawny adres email");
    }
    else{
        elementValidationOk(inputElement)
    }
}

function emptyStringValidation(inputElement, errorElement, message){
    var validation;

    validation = validateStringNotEmpty(inputElement.value);
    if(validation){
        elementValidationOk(inputElement);   
        return true;
    } 
    else{
        elementValidationError(inputElement);
        elementAddText(errorElement, message);
        return false;
    } 
}

function dateFormatValidation(inputElement, errorElement, message){

    var date;
    var dateformat = /\d{4}-\d{2}-\d{2}/

    if(!inputElement.value.match(dateformat)){
        elementValidationError(inputElement);
        elementAddText(errorElement, message);
        return false;
    }
    try{
        date = new Date(inputElement.value);
        if(isNaN(date)){
            throw new Error("Invalid date");
        }
    }  
    catch(e){
        console.log("Błąd: " + e);
        elementValidationError(inputElement);
        elementAddText(errorElement, "Podana data jest nie prawidłowa");
        return false;
    }

    return true;
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
    element.innerHTML += "- " + text + "<br>";
}

function elementClearText(element){
    element.innerHTML = "";
}

function openModal(elementId){
    console.log("open modal")
    var modal = document.getElementById(elementId);
    modal.style = "display: block;";
}

function closeModal(elementId){
    console.log("close modal");
    var modal = document.getElementById(elementId);
    modal.style = "display: none;";
}   

var modalButton = document.getElementsByClassName("modal-btn");    


modalButton.onclick = function(){
    console.log("open modal");
}