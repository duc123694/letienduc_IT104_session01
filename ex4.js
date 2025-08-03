function checkParity(a){
    if(typeof a!== 'number' || isNaN(a)){
        console.log (`${a} is not a number`);
        return;
    }
    if( a%2 ===  0){
        console.log(`${a} is an even number`);
    }else{
        console.log(`${a} is odd`);
    }
}
console.log(checkParity(10));
console.log(checkParity("abc"));