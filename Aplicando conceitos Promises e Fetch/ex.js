function doSomething(callback) {
    setTimeout(function() {
        callback("First data");
    }, 1000);
}

function doOtherThing(callback) {
    setTimeout(function() {
        callback('Second data');
    }, 1000);
}

function doAll() {
    try {
        doSomething(function(data) {
            var processedData = data.split('');

            try {
                doOtherThing(function(data) {
                    var processedData2 = data.split('');

                    try {
                        setTimeout(function() {
                            console.log(processedData, processedData2);
                        }, 1000);
                    }
                    catch (err) {

                    }
                });
            }
            catch (err) {
            }
        });
    } 
    catch(err) {

    }
}

// doAll();

// Com Promise

// Estados:
// Pending - executando
// Fulfilled - executada
// Rejected - erro

const doSomethingPromise = () => new Promise((resolve, reject) => {
    // throw new Error('Error');
    setTimeout(function() {
        resolve("First data");
    }, 1000);
});

const doOtherThingPromise = () => new Promise((resolve, reject) => {
    // throw new Error('Other error');
    setTimeout(function() {
        resolve("Second data");
    }, 1000);
});

console.log('1', doOtherThingPromise);

// doSomethingPromise()
//     .then(data => console.log(data))
//     .catch(error => console.log(error));

doSomethingPromise()
    .then(data => {
        console.log(data);
        return doOtherThingPromise();
    })
    .then(data2 => console.log(data2))
    .catch(error => console.log(error));

doSomethingPromise()
    .then(data => {
        console.log(data);
        return doOtherThingPromise();
    })
    .catch(error => console.log(error));

// Testes

const myPromise = new Promise(function(resolve, reject) {
    resolve("1");
    reject("2");
});

myPromise.then(
    function(value) {
        console.log("resolve", value);
    },
    function(value) {
        console.log("reject", value);
    }
);

const myPromise1 = new Promise((resolve, reject) => {
    resolve("resolve", "3");
    reject("reject", "4");
});

myPromise1.then(
    (type, value) => {
        console.log(type, value);
    }, 
    (type, value) => {
        console.log(type, value);
    }
);

const myPromise3 = () => new Promise((resolve, reject) => {
    setTimeout(function() {
        resolve("Promise3");
    }, 1000);
});

const myPromise4 = () => new Promise((resolve, reject) => {
    setTimeout(function() {
        resolve("Promise4");
    }, 1500);
});

Promise.race([myPromise3(), myPromise4()]).then(
    data => console.log(data)
);

const myPromise5 = () => new Promise((resolve, reject) => {
    setTimeout(function() {
        resolve("Promise5");
    }, 1000);
});

const myPromise6 = () => new Promise((resolve, reject) => {
    setTimeout(function() {
        resolve("Promise6");
    }, 1500);
});

Promise.all([myPromise5(), myPromise6()]).then(
    data => console.log(data)
);
