const router = require('express').Router()

router.get('/', (req, res) => {
    res.json({ message: 'Rest Service Operational' })
});

module.exports = router