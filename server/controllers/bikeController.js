const bikeController = require('express').Router();

const { hasUser } = require('../middlewares/guards');
/// todo HAS_USER - guards
const { getAll, create, getById, update, deleteById, getByUserId } = require('../service/bikeService');
// const { parseError } = require('../util/parser');
//todo parseError

bikeController.get('/', async (req, res) => {
    const bikes = await getAll();
    res.status(200).json(bikes)
});

bikeController.post('/', hasUser(), async (req, res) => {
    try {
        const bike = await create(req.body, req.user._id);
        res.json(bike)
    } catch (err) {
        // const message = parseError(err)
        res.status(400).json({ error: err.message })
        console.log(err);
    }
    res.end()
});

bikeController.get('/:id', async (req, res) => {
    const bike = await getById(req.params.id)
    return res.status(400).json(bike)
});

bikeController.put('/:id', async (req, res) => {

    const bike = await getById(req.params.id);
    //todo parse token
    // if (req.user._id != bike._ownerId) {
    //     return res.status(403).json({ message: 'You cannot modify this record' })
    // }
    try {
        const result = await update(req.params.id, req.body);
        res.status(400).json(result)
    } catch (err) {
        const message = parseError(err)
        res.status(400).json({ error: err.message })
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