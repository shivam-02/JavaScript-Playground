function justDoIt(){
    function coolIt(){
        console.log("very cool");
    }
    return coolIt;
}
var a=justDoIt();
a();