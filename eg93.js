var x=[10,20,30,40,50,60,70,80,90];
function abcd(n){
    return n>50;
}
var y=x.find(abcd);
console.log(x);
console.log(y);

var i=x.findIndex(abcd);
console.log(i);