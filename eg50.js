// Named Expression Function
var k=function doSomething(x,y){
    return x+y;
}
//console.log("Total is : "+doSomething(10,20)); // wrong

console.log("Total is: "+k(10,20));