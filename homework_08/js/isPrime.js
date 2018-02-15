function isPrime(x) {
    if (x === 2) {return true};
    if (x>1){
        for(let i = 2; i<x;i++){
            if(x%i === 0){return false};
        }
        return true;
    } else {
        return false;
    };
}