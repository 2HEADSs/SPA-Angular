const { Schema, model } = require('mongoose')


const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        minlength: [5, 'Username must be at least 5 characters!'],
        maxlength: [10, 'Username must be shorten than 10 characters!'],
    },
    email: { type: String, required: true, unique: true },
    hashedPassword: { type: String, required: true, }
});

userSchema.index({ email: 1 }, {
    collation: {
        locale: 'en',
        strength: 2
    }
})

const User = model('User', userSchema)

module.exports = User