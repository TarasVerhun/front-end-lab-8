function reverseNumber(x) {
    if(x >= 0){
        return +String(x).split('').reverse().join('');
    } else {
        return +('-' + String(x).substr(1).split('').reverse().join(''));
    }
}