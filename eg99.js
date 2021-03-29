class Person{
    firstName;
    lastName;
    constructor(firstName,lastName){
        this.firstName=firstName;
        this.lastName=lastName;
    }
    getFullName(){
        return this.firstName+","+this.lastName;
    }
}

var p1=new Person("Shivam","Sugandhi");
var p2=new Person("Sam","John");
console.log(p1.getFullName());
console.log(p2.getFullName());

