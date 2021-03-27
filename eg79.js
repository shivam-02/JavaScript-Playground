var x=[];
x[0]=20;
x[1]=30;
x["abcd"]=55;
x["pqr"]=67;
console.log(x);
console.log(x["pqr"]);
console.log(x["abcd"]);
console.log(x.length);
console.log(x.abcd);
for(var i=0;i<x.length;i++){
    console.log(x[i]);
}