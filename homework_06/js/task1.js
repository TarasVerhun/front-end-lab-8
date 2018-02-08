function getArea(a, b, c) {
    const p = (a + b + c) / 2;
    return Math.round(Math.sqrt(p * (p - a) * (p - b) * (p - c)) * 100) / 100;
}

function compareNum(a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
}

let arr = [];

arr.push(parseFloat(prompt("Enter the first side")));
arr.push(parseFloat(prompt("Enter the second side")));
arr.push(parseFloat(prompt("Enter the third side")));

arr.sort(compareNum).reverse();
let count = 0;
for (let i = 0; i < arr.length; i++) {
    if (!isNaN(arr[i]) && arr[i] > 0) count++;
}

if (count < 3 || arr[0] >= arr[1] + arr[2]) {
    console.log('Incorrect data');
} else {
    let area = getArea(arr[0], arr[1], arr[2]);
    let type = '';
    if (Math.pow(arr[0], 2) == Math.pow(arr[1], 2) + Math.pow(arr[2], 2)) {
        type = 'right';
    } else if (arr[0] == arr[1] && arr[1] == arr[2]) {
        type = 'equilateral';
    } else if (arr[0] == arr[1] || arr[0] == arr[2] || arr[1] == arr[2]) {
        type = 'isosceles';
    } else {
        type = 'scalene';
    }

    console.log(`Type of triangle is ${type} and square is ${area}`);
}