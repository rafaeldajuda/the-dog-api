const mongodb = require('../database');

const DogItem = new mongodb.Schema({
    weight: {
        imperial: {
            type: String,
            metric: String
        }
    },
    height: {
        imperial: {
            type: String,
            metric: String
        }
    },
    id: Number,
    name: String,
    bred_for: String,
    breed_group: String,
    life_span: String,
    temperament: String,
    reference_image_id: String
})

const DogSchema = new mongodb.Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    url: {
        type: String,
        required: true
    },
    width: {
        type: Number
    },
    height: {
        type: Number
    },
    breeds: {
        type: [DogItem]
    }
});

const Dog = mongodb.model('Dog', DogSchema);

module.exports = Dog;