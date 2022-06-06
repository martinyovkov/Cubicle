const Cube = require("../models/Cube");
const Accessory = require("../models/Accessory");

const create = (name, description, imageUrl, difficulty) =>{
    let cube = new Cube({
        name, 
        description, 
        imageUrl, 
        difficulty
    });
 

   return cube.save();
};

const getAll = () => Cube.find({}).lean(); 

const getById = (id)=>{
    return Cube.findById(id).populate('accessories').lean(); 
}




const search =  async (text, from ,to)=>{
    if (from == '' && to =='') {
         return await getAll().filter(x=> x.name.toLowerCase().includes(text.toLowerCase()));
    }
    else if (to =='') {
        return await getAll().filter(x=> x.name.toLowerCase().includes(text.toLowerCase()) && x.difficulty>= from);
    }
    else if (from == '') {
        return await getAll().filter(x=> x.name.toLowerCase().includes(text.toLowerCase()) && x.difficulty<= to);
    }
    else{
        return await getAll().filter(x=> x.name.toLowerCase().includes(text.toLowerCase()) && x.difficulty>= from && x.difficulty<= to);
    }   
}

const attachAccessory = async (cubeId, accessoryId)=>{
    let cube = await Cube.findById(cubeId);
    let accessory = await Accessory.findById(accessoryId);
    
    cube.accessories.push(accessory);

    return cube.save();
};




const cubeService = {
    create,
    getAll,
    getById,
    search,
    attachAccessory
};

module.exports = cubeService;