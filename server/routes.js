const { authController } = require('./controllers/authController');

const router = require('express').Router()

router.get('/', (req, res) => {
    console.log(req + 'request');
    res.json({ message: 'Rest Service Operational' })
});

router.use('/user', authController)

module.exports = router