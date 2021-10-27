const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

// Fetch
fetch('http://localhost:5000/data')
    .then(responseStream => {
        console.log(responseStream);
    }).catch(error => console.log(error));

fetch('http://localhost:5000/data', {
    method: 'get'
})
    .then(responseStream => {
        if (responseStream.status == 200) {
            return responseStream.json();
        } else {
            throw new Error('Request error');
        }
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => console.log(error));

// Await e Async

const simpleFunc = async () => {
    // throw new Error('Erro');
    return 12345;
}

simpleFunc()
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error)
    })

const asyncTimer = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(12345);
    }, 1000);
});

const simpleFunc1 = async () => {
    const data = await asyncTimer();

    return data;
}

simpleFunc1()
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error)
    })

const simpleFunc2 = async () => {
    const data = await asyncTimer();
    const dataJSON = await fetch('http://localhost:5000/data')
        .then(responseStream => {
            console.log(responseStream);
        }).catch(error => console.log(error));

    return data;
}

simpleFunc2()
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error)
    })

const simpleFunc3 = async () => {
    const data = await Promise.all([
        asyncTimer(),
        fetch('http://localhost:5000/data')
        .then(responseStream => {
            return responseStream.json();
        }).catch(error => console.log(error))
    ]);

    return data;
}

simpleFunc3()
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error)
    })