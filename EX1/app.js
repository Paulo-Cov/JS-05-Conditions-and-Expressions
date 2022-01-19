var names = ["Maria", "Antony", "Joy", "Juan"]
function writeName (myName){
    names.push(myName);
}
writeName("Paulo");
console.log(names);


let i = names.length;
let nameIn = false;
function checkName (nameCheck){
    while (i--) {
       if (names[i] == nameCheck) {
            nameIn = true;
       }
    }
}
checkName("Paulo");
console.log(nameIn);

var names2 = ["Maria", "Karen","Alex", "Joy"];
i = names.length;
var repeated = []; 
function compareArrays(){
    while (i--) {
        j = names2.length;
        while(j--){
            if (names[i] == names2[j]) {
                repeated.push(names[i]);
           }
        }
     }
     console.log(repeated)
}
compareArrays();

i = names.length;
var lengths = []; 
function nameLength (){
    while (i--) {
        x = (names[i].length);
        lengths.unshift(x);
        }
    console.log(lengths)
}
nameLength();