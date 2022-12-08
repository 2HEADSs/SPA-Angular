const authController = require('express').Router();
const { login, register } = require('../service/userService');
//TODO parsing error


authController.post('/register', async (req, res) => {
    try {
        const token = await register(req.body.email, req.body.username, req.body.password)
        res.status(201).json(token)
        //TODOnot sure
        res.end()
    } catch (error) {
        console.log(error);
        res.status(400).json({ error:error.message })
    }
})


authController.post('/login', async (req, res) => {
    try {
        const token = await login(req.body.email, req.body.password)
        res.status(200).json(token)
        //TODOnot sure
        res.end()
    } catch (error) {
        res.status(400).json({ error:error.message })
    }
})
//TODO LOGOUT


module.exports = {
    authController
}