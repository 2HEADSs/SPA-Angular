const bikeController = require('express').Router();

/// todo HAS_USER - guards
const { getAll, create, getById, update, deleteById, getByUserId } = require('../service/bikeService');
// const { parseError } = require('../util/parser');
//todo parseError

bikeController.get('/', async (req, res) => {
    const bikes = await getAll();
    res.status(200).json(bikes)
});

bikeController.post('/', async (req, res) => {
    try {
        const data = Object.assign({ _ownerId: req.user._id }, req.body)
        const bike = await create(data);
        res.json(bike)
    } catch (err) {
        // const message = parseError(err)
        res.status(400).json({ error:err.message })
    }
    res.end()
});

bikeController.get('/:id', async (req, res) => {
    const bike = await getById(req.params.id)
    res.status(400).res.json(bike)
});

bikeController.put('/:id', async (req, res) => {
    const bike = await getById(req.params.id);
    if (req.user._id != bike._ownerId) {
        return res.status(403).json({ message: 'You cannot modify this record' })
    }
    try {
        const result = await update(req.params.id, req.body);
        console.log(result);
        res.json(result)
    } catch (err) {
        const message = parseError(err)
        res.status(400).json({ error:err.message })
    }
});

bikeController.delete('/:id', async (req, res) => {
    const item = await getById(req.params.id);

    if (req.user._id != item._ownerId) {
        return res.status(403).json({ message: 'You cannot modify this record' })
    }
    try {
        await deleteById(req.params.id);
        res.status(204).end()
    } catch (err) {
        const message = parseError(err)
        res.status(400).json({ message })
    }
});

module.exports = {
    bikeController
};