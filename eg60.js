function doSomething(f,x,y){
    return f(x,y);
}
console.log(doSomething(function(p,q){
    return p*q;
},10,20));