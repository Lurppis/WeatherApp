// How does promises works.

var somePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Hey it worked');
        //reject('Unable to fulfull promise');
    }, 2500);
});

somePromise.then((message) => {
    console.log('Success: ' + message);
}, (error) => {
    console.log('Error: ' + error);
});