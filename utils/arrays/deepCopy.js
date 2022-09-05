// Object.assign

// Spread operator

// deep copy

function assign(target, source) {
    Object.entries(source).forEach(([key, value]) => {
        // Doesnt copy the reference value
        target[key] = value;
    });
    return target;
}

// Still has troubles if come across array and then if that array value is an object ... urgh
// use lodash https://www.geeksforgeeks.org/lodash-_-clonedeep-method/
function deepAssign(target, source) {
    Object.entries(source).forEach(([key, value]) => {
        if (typeof value === 'object') {
            target[key] = assign({}, value);
        } else {
            target[key] = value;
        }
    });
    return target;
}
