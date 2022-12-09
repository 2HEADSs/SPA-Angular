const { Schema, model, Types: { ObjectId } } = require('mongoose')

const URL_PATTERN = /https?:\/\/./i

const bikeSchema = new Schema({
    brand: {
        type: String, required: true,
        minlength: [1, 'Brand must be minimum one characters!']
    },
    model: {
        type: String, required: true,
        minlength: [1, 'Model must be minimum one characters!']
    },
    year: {
        type: Number, required: true,
        min: [1885, 'First bike was made in 1885'],
        max: [2022, 'We are still in 2022!!!']
    },
    power: {
        type: Number, required: true,
        min: [0.5, 'Minumum power 0.5 HP!'],
    },
    price: {
        type: Number, required: true, min: [0.01, 'Price must be positive number!']
    },
    description: {
        type: String, required: true,
        minlength: [10, 'Description must be at least 10 characters long!'],
        maxlength: [100, 'Description cannot be more than 100 characters long!']
    },
    img: {
        type: String,
        validate: {
            validator: (value) => URL_PATTERN.test(value),
            message: 'Invalid URL, must start with HTTP/HTTPS'
        }
    },
    _ownerId: { type: ObjectId, ref: 'User', required: true }
});


const Bike = model('Bike', bikeSchema)

module.exports = Bike