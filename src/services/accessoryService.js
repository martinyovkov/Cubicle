const Accessory = require('../models/Accessory');

const create = async(name, description, imageUrl)=>{
    return Accessory.create({name, description, imageUrl});
}

const getAll = async () => Accessory.find({}).lean();

const getAllUnused = (accessoryIds)=>{
    //return Accessory.find({_id: {$nin: accessoryIds}}).lean();
    return Accessory.find().where('_id').nin(accessoryIds).lean();
}

const accessoryService = {
    create,
    getAll,
    getAllUnused
};

module.exports = accessoryService;