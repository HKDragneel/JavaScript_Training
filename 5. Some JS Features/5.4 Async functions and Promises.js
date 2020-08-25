/*
    A, B and C will be prinnted in different order because
        these functions are asynchronous

    Each printString function call will be executed in same
        order but are independent of each other's execution block
        i.e. they won't wait for the last function to finish execution
*/
function printString(string) {
    setTimeout(
        () => {
            console.log(string);
        }, Math.floor(Math.random() * 100) + 1
    );
}

function printAll() {
    printString('A');
    printString('B');
    printString('C');
}
printAll();

/*
    The above situation can be resolved with a callback

    But implemeting callback leads to nested functions which
        makes code unreadable and ugly
    
    This is referred to as -->callback hell<--
*/

function printString (string, callback) {
    setTimeout(() => {
        console.log(string);
        callback();
    }, Math.floor(Math.random() * 100) + 1);
}

function printAll () {
    printString('A', () => {
        printString('B', () => {
            printString('C', () => {});
        });
    });
}

printAll();

/*
    To overcome this problem of callback hell the concept of
        -->Promises<-- is used
    
    Promises helps to avoid nested function style and instead wrap
        the whole function inside a Promise object which instead of
        calling the callback calls resolve or reject
    
    Thus the function call is going to return a promise object which is 
        passed to the next function in the chain. This is called 
        Promise chain
    
    Promises make code comparatively more readable but still Promise chain
        makes the code messy.
*/

function printString(string) {
    return new Promise(
        (resolve, reject) => {
            setTimeout(() => {
                if (typeof(string) != 'string') {
                    console.log(`${string} is not a string`);
                    reject();
                } else {
                    console.log(string);
                    resolve();
                }
            }, Math.floor(Math.random() * 1000) + 1);
        }
    );
}

function printAll() {
    printString('A')
        .then(  () => printString(1),
                () => {}                            //empty reject function since first Promise wil call resolve()
            )
        .then(  () => {},                           //empty resolve function since seconde Promise will call reject()
                () => printString('C')
            )
}

printAll();

/*
    To make the code look more readable async and await keywords are
        used together
*/

async function printAll() {
    await printString('A');
    await printString('B');
    await printString('C');
}

printAll();