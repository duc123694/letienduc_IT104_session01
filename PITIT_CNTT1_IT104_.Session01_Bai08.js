function insertArray(arr1, arr2, pos) {
    if (pos < 0 || pos > arr1.length) {
        console.log("Vi tri k hop le");
        return;
    }
    let result = [];
    for (let i = 0; i < pos; i++) {
        result.push(arr1[i]);
    }
    for (let i = 0; i < arr2.length; i++) {
        result.push(arr2[i]);
    }
    for (let i = pos; i < arr1.length; i++) {
        result.push(arr1[i]);
    }
    console.log(result);
}
insertArray([1, 2, 3, 7, 8], [4, 5, 6], 3);
