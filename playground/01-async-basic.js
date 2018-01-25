console.log('Starting app');

setTimeout(() => {
    console.log('Inside of callback');
}, 2000); // After 2 sec log will be executed! setTimeout first async method

setTimeout(() => {
        console.log('Incepction');
}, 0);

console.log('Finnishing app');