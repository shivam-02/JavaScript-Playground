function Toy(){
    this.price=1000;
}
function add(x,y){
    return x+y;
}
var t1=new Toy();
console.log("Price of t1 "+t1.price);
console.log("Total is "+add(10,20));
var t2=new Toy();
t2.price=200;
console.log("Price of t2 "+t2.price);
var t3=t2;   // t2 and t3 both are reference variable or pointer.
t3.price=500;
console.log("Price of t3 "+t3.price);
console.log("Price of t2 "+t2.price);
console.log(t2);


