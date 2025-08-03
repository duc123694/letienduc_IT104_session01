function sumArrays(...arrays){
    let result = [];
    for ( let i = 0; i < arrays.length;i++){
        let cur = arrays[i];
        let sum = 0;
        for( let j =0; j< cur.length;j++){
            sum += cur[j];
        }
        result.push(sum);
    }
    return result;
}
let arr = sumArrays([1, 2], [6, 7, 8], [12, 8]);
console.log(arr);
