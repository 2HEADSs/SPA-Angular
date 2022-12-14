const bikeController = require('express').Router();

const { getAll, create, getById, update, deleteById, getByUserId, getMyBikes } = require('../service/bikeService');


bikeController.get('/', async (req, res) => {
    const bikes = await getAll();
    res.status(200).json(bikes)
});

bikeController.get('/my-bikes', async (req, res) => {
    const bikes = await getByUserId(req.user._id);
    res.status(200).json(bikes)
});

bikeController.post('/', async (req, res) => {
    try {
        const data = Object.assign({ _ownerId: req.user._id }, req.body)
        const bike = await create(data);
        //todo error
        res.json(bike)
    } catch (err) {
        // const message = parseError(err)

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

bikeController.get('/myBikes', async (req, res) => {
    const bikes = await getMyBikes(req.user._id)
    return res.status(200).json(bikes)
})

bikeController.delete('/:id', async (req, res) => {
    console.log(req);
    const bike = await getById(req.params.id);
    console.log(bike);
    if (req.user._id != bike._ownerId._id) {
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


module.exports = {
    bikeController
};