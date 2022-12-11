const bikeController = require('express').Router();

const { hasUser } = require('../middlewares/guards');
/// todo HAS_USER - guards
const { getAll, create, getById, update, deleteById, getByUserId, getMyBikes } = require('../service/bikeService');
// const { parseError } = require('../util/parser');
//todo parseError
//todo - populate bike with _ownerId

bikeController.get('/', async (req, res) => {
    const bikes = await getAll();
    res.status(200).json(bikes)
});

bikeController.post('/', async (req, res) => {
    try {
        const data = Object.assign({ _ownerId: req.user._id }, req.body)
        // console.log(req.user._id);
        // console.log(req.body);
        // const body = req.body
        // body['_ownerId'] = req.user._id
        const bike = await create(data);
        res.json(bike)
    } catch (err) {
        // const message = parseError(err)
        console.log(err + 'errr');
        res.status(400).json({ error: err.message })
    }
    res.end()
});

bikeController.get('/:id', async (req, res) => {
    const bike = await getById(req.params.id)
    return res.status(200).json(bike)
});

bikeController.put('/:id', async (req, res) => {
const bike = await getById(req.params.id);
    // todo parse token
    if (req.user._id != bike._ownerId._id) {
        return res.status(403).json({ message: 'You cannot modify this record' })
    }
    try {
        const result = await update(req.params.id, req.body);
        res.status(200).json(result)
    } catch (err) {
        console.log(err);
        // const message = parseError(err)
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
        // const message = parseError(err)
        res.status(400).json({ err: err.message })
    }
});

bikeController.get('/myBikes', async (req, res) => {

    const bikes = await getMyBikes(req.user._id)
    return res.status(200).json(bikes)
})

module.exports = {
    bikeController
};