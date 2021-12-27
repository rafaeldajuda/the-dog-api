const mongodb = require('../database');

const PageControlSchema = mongodb.Schema({
    description: {
        type: String,
        maxLength: 50
    },
    page: {
        type: Number,
        required: true
    },
    log_date: {
        type: Date,
        default: Date.now
    }
});

const PageControl = mongodb.model('PageControl', PageControlSchema);

module.exports = PageControl;