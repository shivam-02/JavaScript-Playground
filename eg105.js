async function getName(){
    let lastName= await getLastName();
    return "Shivam"+" "+lastName;
}

async function getLastName(){
    return "Sugandhi";
}

var fn=getName();
fn.then(function(name){
    console.log("Hello "+name);
})