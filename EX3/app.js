var num = prompt("Dime un numero");
if(num >= 0 && num <= 25){
    alert(num + " is between 0 and 25");
}
else if (num >= 2 && num <= 100){
    alert(num + " is between 26 and 100");
}
else if(num > 100){
    alert(num + " is greater than 100");
}
else{
    alert(num + " is less than 0")
    }