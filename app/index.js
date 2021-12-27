const dogs = require('./pkg/dogs');

async function app() {
    console.log("inicio listagem");

    await dogs.saveDogs().then(console.log).catch(console.log);

    console.log("fim listagem");
    process.exit(0);
}

app();
