function getTransformedArray(arr, func) {
    let newArr = [];
    forEach(arr, function(el) {
        newArr.push(func(el));
    })
    return newArr;
}

console.log(getTransformedArray([1, 2, 3, 4, 5], function(el) {
    return el * 2;
}));

function getFilteredArray(arr, func) {
    let newArr = [];
    forEach(arr, function(el) {
        func(el) ? newArr.push(el) : null;
    });
    return newArr;
}

console.log(getFilteredArray([1, 2, 3, 4, 5, 6, 7, 3, 5], function(el) {
    return el < 4;
}))

function cypherPhraze(cypherMap, phraze) {
    return getTransformedArray(phraze.split(''), function(el) {
        return cypherMap[el] || el;
    }).join('');
}

console.log(cypherPhraze({ a: 'o', c: 'd', t: 'g' }, 'kitty cat'));

function decypherPhraze(cypherMap, phraze) {
    let decypherMap = {};
    for (key in cypherMap) {
        decypherMap[cypherMap[key]] = key;
    }
    return cypherPhraze(decypherMap, phraze);
}

console.log(decypherPhraze({ a: "o", c: "d", t: "g" }, "kiggy dog"));

let movies = [{
        id: 70111470,
        title: "Die Hard",
        boxart: " http://bb-1/654356453",
        uri: " http://bb-1/654356453",
        rating: 2.7,
        bookmark: []
    },
    {
        id: 654356453,
        title: "Good Mood",
        boxart: "http://bb-1",
        uri: " http://bb-1/654356453",
        rating: 3.5,
        bookmark: [{ time: 65876586 }]
    },
    {
        id: 65432445,
        title: "The Chamber",
        boxart: "http://ch-1",
        uri: " http://ch-1/65432445",
        rating: 3.0,
        bookmark: []
    },
    {
        id: 675465,
        title: "Fracture",
        boxart: "http://fr-1",
        uri: " http://fr-1/675465",
        rating: 4.0,
        bookmark: [{ time: 65876586 }]
    }
];

function collectIds(arr) {
    let filtered = getFilteredArray(arr, function(el) {
        return el.rating > 3.0;
    })
    return getTransformedArray(filtered, function(el) {
        return el.id;
    })
}

console.log(collectIds(movies));