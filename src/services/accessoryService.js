const Accessory = require('../models/Accessory');

const create = async(name, description, imageUrl)=>{
    return Accessory.create({name, description, imageUrl});
}

const getAll = async () => Accessory.find({}).lean();

const accessoryService = {
    create,
    getAll
};

module.exports = accessoryService;