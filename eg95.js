var a=[10,20,40,50,60,70];

function sam(num,index,arr){  // 2nd and 3rd are optional.
    console.log(num);
    console.log(index);
    console.log(arr);
}

var y=a.forEach(sam);

function sam(n){
    return  n*n;
}

var squares=a.map(sam);
console.log(squares);