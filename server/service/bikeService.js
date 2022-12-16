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

async function likeBike(bikeId, userId) {
    const existing = await Bike.findById(bikeId)
    existing.likes.push(userId);
    return existing.save()
}

async function getMyLikes(id) {
    const bikes = await Bike.find({})
    let arr = [];
    bikes.map(x => {
        if (!!(x.likes.includes(id))) {
            arr.push(x)
        }
    })
    return arr;

}


module.exports = {
    getAll,
    getById,
    create,
    update,
    deleteById,
    getByUserId,
    getMyBikes,
    likeBike,
    getMyLikes
}