// What are closures?

// Example1 = create a function that has local scope for a base variable. Then return inner function that
// will access that base variable. Its similar to creating a class and setting the private member variable
// to a value in constructor, and then having a "add" method taking a parameter

// Example2 = Extend use case of example1. Create a function that does stuff once, and then returns a function
// to take a parameter, and find it in the array.
// Similar to class constructor build an array, and then a find method.

// Example3 =
// Example4 = Create a function as a class (closures to hold local scope)
// Example5 = What is module pattern?  basically functions with private helper methods like on a class

// References:
// https://blog.logrocket.com/how-to-decide-between-classes-v-closures-in-javascript/

function example1() {
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
    console.log('Example1');

    function createBase(num) {
        console.log('creating base ');
        return function (innerNum) {
            console.log(innerNum + num);
            return innerNum + num;
        };
    }

    // Creates a function that has a variable assigned to 10.
    var addTen = createBase(10);

    // Will always add ten to the param passed in
    addTen(5);
    addTen(9);
}

function example2() {
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
    console.log('Example2');

    function findSlowly(index) {
        // Just some time consuming loop to prove closures can be used to speed things up
        // by only doing initialise (non changing stuff) once
        let arr = [];
        for (let i = 0; i < 1000000; i++) {
            arr[i] = i * i;
        }

        console.log(arr[index]);
    }
    function find() {
        // Just some time consuming loop to prove closures can be used to speed things up
        // by only doing initialise (non changing stuff) once
        let arr = [];
        for (let i = 0; i < 1000000; i++) {
            arr[i] = i * i;
        }

        return function (index) {
            console.log(arr[index]);
        };
    }

    // Do everything inside the function each time call it
    console.time('6');
    findSlowly(6);
    console.timeEnd('6');
    //
    console.time('150');
    findSlowly(150);
    console.timeEnd('150');

    // Modify function to do the slow loop once, then find method has it cached
    const closure = find();
    //
    console.time('6');
    closure(6);
    console.timeEnd('6');
    //
    console.time('150');
    closure(150);
    console.timeEnd('150');
}

function example3() {
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
    console.log('Example3');

    function delay() {
        // var is function scoped
        for (var i = 0; i < 3; i++) {
            setTimeout(function log() {
                //setTimeout only runs after all the function has run so its current value will be the outer scope
                console.log(i);
            }, i * 1000);
        }
    }

    function delay2() {
        // let is block scoped. yay! - but what if we cant use let?
        for (let i = 0; i < 3; i++) {
            setTimeout(function log() {
                console.log(i);
            }, i * 1000);
        }
    }

    function delay3() {
        // let is block scoped. yay! - but what if we cant use let?

        for (var i = 0; i < 3; i++) {
            // Creates a separate area of memory for each inner function created as part of loop
            // "i" will be scoped locally as passed in, instead of using the outer scope
            function inner(i) {
                setTimeout(function log() {
                    console.log(i);
                }, i * 1000);
            }

            inner(i);
        }
    }

    // delay(); // print 3,3,3 - why not 1,2,3?
    // delay2(); // print 1,2,3 - but uses "let" in loop which has local scope
    delay3();
}

function example4() {
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
    console.log('Example4');

    function counter() {
        var _count = 0;

        function add(num) {
            _count += num;
        }

        function getCount() {
            return _count;
        }

        // Must return functions (like exposing methods on a class)
        return {
            add,
            getCount,
        };
    }

    const c = counter();
    c.add(5);
    c.add(20);
    console.log('counter is: ', c.getCount());
}

function example5() {
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
    console.log('Example5');

    var Module = (function () {
        function privateMethod() {
            console.log('private helper');
        }

        return {
            publicMethod: function () {
                console.log('public');
                privateMethod();
            },
        };
    })();

    Module.publicMethod();
    Module.privateMethod(); // Will give error as its not exported
}

// Run the examples. Example3 as some async so might screw up output order
example1();
example2();
//example3();
example4();
example5();
