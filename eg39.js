var x=10;        // global declaration
function sam(){
    var x=20;    // local declaration
    var y=30;
    if(y==30){
        var x=40;
        console.log(x);  // local x,which has been declared at at the start of declaration.
    }
    console.log(x);
}
sam();
console.log(x);