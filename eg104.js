function* generateSequence(){
    yield 1;
    yield 2;
    yield 3;
    yield console.log("hello there");
    yield 'shivam';
    return 4;
}

let generate=generateSequence();
console.log(generate.next());
console.log(generate.next());
console.log(generate.next());
console.log(generate.next());
console.log(generate.next());
console.log(generate.next());
console.log(generate.next());