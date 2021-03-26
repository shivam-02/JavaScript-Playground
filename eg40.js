var x=10;        // global declaration
function sam(){
    var x=20;    // local declaration (function level)
    var y=30;
    if(y==30){
        let x=40; // block level as of now if block
        console.log(x);
    }
    console.log(x); // declared at function level.
}
sam();
console.log(x);