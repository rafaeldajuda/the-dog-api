const mongoose = require('mongoose');
const config = require('config');

const url = config.get('mongodb.url');
const database = config.get('mongodb.database');
const username = config.get('mongodb.username');
const password = config.get('mongodb.password');

mongoose.connect(`mongodb://${url}:27017/${database}`, {
    auth: {
        username,
        password
    },
    authSource: 'admin',
    useUnifiedTopology: true,
    useNewUrlParser: true
});

module.exports = mongoose
