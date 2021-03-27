function Toy(){
    this.price=0;
    var brand="Philips";
    this.printPrice=function(){
        console.log("Price :"+this.price);
    }

    this.getBrand=function(){
        return brand;
    }
    function doSomething(){
        console.log("Whatever");
    }
    this.sam=function() {
        doSomething();
    }
}
var t1=new Toy();
console.log(t1.price);
// console.log(t1.brand); // wrong not accessible
console.log(t1.getBrand());
//console.log(t1.doSomething()); // wrong not accessible,(not with this)
console.log(t1.sam());
t1.printPrice();

