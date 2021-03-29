try{
    throw new Error("sorry this site not working");
}catch(e){
    console.error(e.name+":"+e.message);
}