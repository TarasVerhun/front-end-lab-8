function getClosestToZero() {
    let arr = [];
    for(let i = 0; i<arguments.length;i++){
        arr.push(arguments[i]);
    }
    return arr.sort((a, b) => {
        a = Math.abs(a);
        b = Math.abs(b);
        if (a < b){
            return -1
        }
        if (a > b){
            return +1
        }
        if (a === b){
            return 0
        }
    })[0];
}
