var mySet=new Set();

mySet.add("a");
mySet.add("b");
mySet.add("a");
mySet.add("c");
mySet.add("d");

console.log(mySet);

var iter=mySet[Symbol.iterator]();

for(x of iter){
    console.log(x);
}
var anotherSet=new Set([1,2,3,4]);
console.log(anotherSet);
console.log(anotherSet.has(3));
console.log(mySet.has("x"));