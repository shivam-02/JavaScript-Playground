x=10;

function sam(){
    console.log(x); // local x
    var x;         
    x=30;
    console.log(x);
}

console.log(x); // global x
sam();
console.log(x); // global x