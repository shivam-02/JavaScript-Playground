var x=[1,33,22,10,100,95,88,5,231];
var y=x.copyWithin(4,6);
console.log(y);
var z=x.copyWithin(2,6,7);
console.log(z);

function doSomething(n){
    console.log("called with "+n);
    return n%2==0;
}
console.log(x.every(doSomething));

var a=[10,20,30,40];

console.log(a.every(doSomething));

x.fill(300,2,7);
console.log(x);
