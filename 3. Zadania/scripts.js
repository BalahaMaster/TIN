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