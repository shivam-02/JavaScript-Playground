var myMap=new Map();

var anotherMap=new Map([["pqr","john"],["abc","sam"],["xyz","Hi"]]);

myMap.set(1,"a");
myMap.set(2,"b");
myMap.set(3,"c");
myMap.set(4,"d");

console.log(myMap);
console.log(anotherMap);

var iter=myMap[Symbol.iterator]();
console.log(iter.next());
console.log(myMap.get(2));
console.log(anotherMap.get("xyz"));
console.log(myMap.keys());
console.log(myMap.values());
//console.log(myMap[3]);
