var x=[1,33,22,10,100,95,88];
var y=x.sort(myComparator);
console.log(x);
console.log(y);
var e=['amit','bharat','gopal','ajay'];
console.log(e.sort());

function myComparator(i,j){
    if(i==j) return 0;
    if(i>j) return 1;
    if(i<j) return -1;
}