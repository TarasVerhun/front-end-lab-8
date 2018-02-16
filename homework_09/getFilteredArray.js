function getFilteredArray(arr, func) {
    let newArr = [];
    forEach(arr, function(el) {
        func(el) ? newArr.push(el) : null;
    });
    return newArr;
}