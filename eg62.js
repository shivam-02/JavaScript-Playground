function justDoIt(){
    return () => {
        console.log("cool things");
    }
}
var a=justDoIt();
a();