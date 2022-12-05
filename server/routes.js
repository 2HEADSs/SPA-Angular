const { authController } = require('./controllers/authController');
const { bikeController } = require('./controllers/bikeController');

const router = require('express').Router()

router.get('/', (req, res) => {
    console.log(req + 'request');
    res.json({ message: 'Rest Service Operational' })
});

router.use('/auth', authController)
router.use('/bikes', bikeController)

module.exports = router