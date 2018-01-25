var getUser = (id, callback) => {
    var user = {
        id: id,
        name: 'Hekarim'
    };
    setTimeout(() => {
        callback(user);   
    },3000);
};

getUser(01, (user) => {
    console.log(user);
});