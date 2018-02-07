function getArea(a, b, c) {
    var p = (a + b + c) / 2;
    return Math.round(Math.sqrt(p * (p - a) * (p - b) * (p - c)) * 100) / 100;
}

var arr = [];

arr.push(+prompt("Enter first side"));
arr.push(+prompt("Enter second side"));
arr.push(+prompt("Enter third side"));

arr.sort().reverse();
var count = 0;
for (var i = 0; i < arr.length; i++) {
    if (!isNaN(arr[i]) && arr[i] > 0) count++;

}
if (count < 3 || arr[0] >= arr[1] + arr[2]) {
    console.log('Incorrect data');
} else {
    var area = getArea(arr[0], arr[1], arr[2]);
    var type = '';
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