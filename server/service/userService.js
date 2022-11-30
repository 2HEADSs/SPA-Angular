const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/User')


async function register(email, password) {
    const existing = await User.findOne({ email }).collation({ locale: 'en', strength: 2 })
    if (existing) {
        throw new Error('Email is taken')
    }

    const user = await User.create({
        email,
        hashedPassword: await bcrypt.hash(password, 10)
    });

    return createToken(user)
}

