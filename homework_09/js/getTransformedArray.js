function getTransformedArray(arr, func) {
    let newArr = [];
    forEach(arr, function(el) {
        newArr.push(func(el));
    })
    return newArr;
}