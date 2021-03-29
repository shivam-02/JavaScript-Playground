var p3=Symbol("id"); // Primitive data type that is guranteed to be unique even if the description is same.
var p4=Symbol("id");
console.log(p3==p4);

class shivam{
    age=28;
}
const id=Symbol("id");
shivam[id]="Shidfj13";   // Symbols can be used to create hidden property.

console.log(shivam);