let height = prompt('Enter the natural number between 1 and 20');
if (isNaN(height) || !height) {
    console.error("Please enter the NUMBER");
} else {
    if (!Number.isInteger(parseFloat(height))) {
        console.error('Just enter the NATURAL number, please!');
    } else {
        if (height > 0 && height <= 20) {
            let elem = "[~]";
            let elem1 = elem;
            let space = "   ";
            let p = "";
            let row;
            for (let i = 0; i < height; i++) {
                let str = "";
                for (let j = height - 1; j > i; j--) {
                    str = str.concat(space);
                }
                row = str.concat(elem.concat(str));
                elem = elem.concat(elem1.concat(elem1));
                p = p.concat(row).concat("\n");
            }
            console.log(p);
        } else {
            console.error('The number must match required range: (1-20).');
        }
    }
}