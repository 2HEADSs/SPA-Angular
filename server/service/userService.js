const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/User')

const secret = 'q-asd231adfas12321kl';


async function register(email, password) {
    const existing = await User.findOne({ email }).collation({ locale: 'en', strength: 2 })
    if (existing) {
        throw new Error('Email is already taken!!!')
    }

    const user = await User.create({
        email,
        hashedPassword: await bcrypt.hash(password, 10)
    });

    return createToken(user)
}

async function login(email, password) {
    const user = await User.findOne({ email }).collation({ locale: 'en' })
}


function createToken(user) {
    const payload = {
        _id: user._id,
        email: user.email
    };
    return {
        _id: user._id,
        email: user.email,
        accessToken: jwt.sign(payload, secret)
    }
}

function parseToken(token) {
    return jwt.verify(token, secret)
}

module.exports = {
    register,
    login,
    parseToken
}