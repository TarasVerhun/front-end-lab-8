function getMin() {
    let arr = [];
    for(let i = 0; i<arguments.length;i++){
        arr.push(arguments[i]);
    }
    return arr.sort((a,b)=>a-b)[0];
}
