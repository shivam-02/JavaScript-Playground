function Toy(){
    this.price=0;
    this.brand="";
    this.manual=function(){
        console.log("blah blah about: "+this.brand);
    }
}
var t1=new Toy();
var t2=new Toy();
t1.brand="Lego";
t1.price=1000;
t2.brand="John";
t2.price=2000;
console.log("Brand "+t1.brand+" Price "+t1.price);
console.log("Brand "+t2.brand+" Price "+t2.price);
t1.manual();
t2.manual();