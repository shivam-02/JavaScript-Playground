function add(x,y,z,a,b){
    return x+y+z+a+b;
}
var a=[10,20,30,40,50];

function sam(){
    return add(...arguments);
}
console.log(sam(10,20,30,40,50));