const bikeController = require('express').Router();

const { getAll, create, getById, update, deleteById, getByUserId, getMyBikes, likeBike, getMyLikes } = require('../service/bikeService');


bikeController.get('/', async (req, res) => {
    try {
        const bikes = await getAll();
        res.status(200).json(bikes)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
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
    } catch (error) {
        // const message = parseError(err)
        console.log(error);
        res.status(400).json({ error: error.message })
    }
    res.end()
});

bikeController.get('/my-likes', async (req, res) => {

    try {
        const bikes = await getMyLikes(req.user._id)
        return res.status(200).json(bikes)
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: error.message })
    }
})

bikeController.get('/:id', async (req, res) => {
    try {
        const bike = await getById(req.params.id)
        if (!bike) {
            throw new Error('Bike does not exist')

        }
        return res.status(200).json(bike)
    } catch (error) {
        res.status(400).json({ error })

    }
});

bikeController.put('/:id', async (req, res) => {
    try {
        const bike = await getById(req.params.id);

        // todo parse token
        if (req.user._id != bike._ownerId._id) {
            return res.status(403).json({ message: 'You cannot modify this record' })
        }
        const result = await update(req.params.id, req.body);
        res.status(200).json(result)
    } catch (err) {
        console.log(err);
        // const message = parseError(err)
        res.status(400).json({ error: err.message })
    }
});

bikeController.get('/myBikes', async (req, res) => {
    try {
        const bikes = await getMyBikes(req.user._id)
        return res.status(200).json(bikes)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

bikeController.delete('/:id', async (req, res) => {
    try {
        const bike = await getById(req.params.id);
        if (req.user._id != bike._ownerId._id) {
            return res.status(403).json({ err: err.message })
        }
        await deleteById(req.params.id);
        res.status(204).end()
    } catch (err) {
        res.status(400).json({ err: err.message })
    }
});

bikeController.get('/like/:id', async (req, res) => {
    try {
        const bike = await getById(req.params.id)
        if (bike._ownerId._id != req.user._id
            && bike.likes.map(x => x.includes(req.user?._id) == false)) {
            try {
                await likeBike(req.params.id, req.user._id);
                const bike = await getById(req.params.id)

                return res.status(200).json(bike)
            } catch (error) {
                res.status(400).json({ err: error.message })
            }
        }
    } catch (error) {
        res.status(400).json({ err: error.message })

    }
});




module.exports = {
    bikeController
};