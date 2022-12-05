const { Schema, model, Types: { ObjectId } } = require('mongoose')

const bikeSchema = new Schema({
    brand: { type: String, required: true },
    model: { type: String, required: true },
    year: { type: Number, required: true },
    power: { type: Number, required: true },
    price: {
        type: Number, required: true, min: [0.01, 'Price must be positive number!']
    },
    description: {
        type: String, required: true, minlength: [
            10, 'Description must be at least 10 characters long!'
        ]
    },
    img: { type: String, required: [true, 'Image URL si required'] },
    _ownerId: { type: ObjectId, ref: 'User', required: true }
});


const Bike = model('Bike', bikeSchema)

module.exports = Bike