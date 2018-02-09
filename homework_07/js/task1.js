function pyramid(height) {
    let elem = '[~]';
    let elem1 = elem;
    let space = '   ';
    let p = '';
    let row;
    for (let i = 0; i < height; i++) {
        let str = "";
        for (let j = height - 1; j > i; j--) {
            str = str.concat(space);
        }
        row = str.concat(elem.concat(str));
        elem = elem.concat(elem1.concat(elem1));
        p = p.concat(row).concat('\n');
    }
    console.log(p);
}

function isInteger(num) {
    return num % 1 == 0;
}

let height = parseFloat(prompt('Enter the number between 1 and 20'));
if (!isInteger(height)) {
    console.error('Just enter the NATURAL number, please!');
} else {
    if (height > 0 && height <= 20) {
        pyramid(height);
    } else {
        console.error('The number must match required range: (1-20).');
    }
}