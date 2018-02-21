function debounce(func, delay) {
    let timeout;
    return function() {
        args = arguments;

        function complete() {
            func.apply(this, args)
        }
        if (timeout) {
            clearTimeout(timeout)
        }
        timeout = setTimeout(complete, delay);
    }
}

// Example

let iterator = 0;

function increaseIteratorBy1() {
    iterator++;

    printIteratorValue();
}

function printIteratorValue() {
    console.log('Iterator value ', iterator);
}

var increaseIterator = debounce(increaseIteratorBy1, 1000);

increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator(); // Should print 'Iterator value 1'