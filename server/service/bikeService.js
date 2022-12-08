const Bike = require('../models/Bike')


async function getAll() {
    return Bike.find({})

};
async function getByUserId(userId) {
    return Bike.find({ _ownerId: userId })

};
async function getById(id) {
    return Bike.findById(id).populate('_ownerId')
};

async function create(data) {
    return Bike.create(data)
};

async function update(id, bike) {
    const existing = await Bike.findById(id);

    existing.brand = bike.brand;
    existing.model = bike.model;
    existing.year = bike.year;
    existing.power = bike.power;
    existing.price = bike.price;
    existing.description = bike.description;
    existing.img = bike.img;
    return existing.save()
}

async function deleteById(id) {
    return Bike.findByIdAndDelete(id)
};

async function getMyBikes(id) {
    return await Bike.find({ _ownerId: id })
}


module.exports = {
    getAll,
    getById,
    create,
    update,
    deleteById,
    getByUserId,
    getMyBikes
}