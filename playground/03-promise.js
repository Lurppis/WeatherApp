// How does promises works.

var asyncAdd = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a === 'number' && typeof b === 'number') {
                resolve(a + b);
            } else {
                reject('Arguments must be numbers!');
            }
        }, 1500);
    });
};

// var somePromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Hey it worked');
//         //reject('Unable to fulfull promise');
//     }, 2500);
// });

// somePromise.then((message) => {
//     console.log('Success: ' + message);
// }, (error) => {
//     console.log('Error: ' + error);
// });


// Chain promises :>
asyncAdd(5, 7).then((res) => {
    console.log('Result is: ' + res);
    return asyncAdd(res, 33);
}).then((res) => {
    console.log('Result is: ' + res);
}).catch((errorMessage) => {
    console.log(errorMessage);
});