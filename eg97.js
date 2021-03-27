function sam(){
    this.a=100;
    console.log(this);
}
this.xx=1000;
console.log(this);
sam();
var z=new sam();
