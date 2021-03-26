function sam(){
    x=10; // x will be treated as a global variable.
    console.log(x); // global x
}

function tom(){
    console.log(x); // global x
}

sam();
tom();