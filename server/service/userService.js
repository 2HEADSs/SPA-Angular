const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/User')

const secret = 'q-asd231adfas12321kl';

async function register(email, username, password) {
    const existing = await User.findOne({ email }).collation({ locale: 'en', strength: 2 })
    if (existing) {
        throw new Error('Email is already taken!!!')
    }

    const user = await User.create({
        username,
        email,
        hashedPassword: await bcrypt.hash(password, 10)
    });

    return createToken(user)
}

async function login(email, password) {
    const user = await User.findOne({ email }).collation({ locale: 'en' })

    if (!user) {
        throw new Error('Invalid  email or password!!!')
    }

    const match = await bcrypt.compare(password, user.hashedPassword)
    if (!match) {
        throw new Error('Invalid  email or password!!!')

    }
    return createToken(user)
}


function createToken(user) {
    const payload = {
        _id: user._id,
        username: user.username,
        email: user.email
    };
    return {
        _id: user._id,
        username: user.username,
        email: user.email,
        accessToken: jwt.sign(payload, secret)
    }
}

function parseToken(token) {
    try {
        return jwt.verify(token, secret)

    } catch (error) {
        throw new Error('Invalid acces token!')
    }
}

module.exports = {
    register,
    login,
    parseToken,

}