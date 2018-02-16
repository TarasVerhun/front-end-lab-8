function forEach(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        func(arr[i]);
    }
}

forEach([1, 3, 5, 7, 9], function(el) {
    console.log(el);
});