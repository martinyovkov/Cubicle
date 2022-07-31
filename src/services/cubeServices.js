const Cube = require("../models/Cube");
const Accessory = require("../models/Accessory");

const create = (name, description, imageUrl, creatorId, difficulty) =>{
    let cube = new Cube({
        name, 
        description, 
        imageUrl,
        creatorId,
        difficulty
    });
 

   return cube.save();
};

const edit = (cubeId, cubeData)=>{
    return Cube.findByIdAndUpdate(cubeId, cubeData);
}

const getAll = () => Cube.find({}).lean(); 

const getById = (id)=>{
    return Cube.findById(id).populate('accessories').lean(); 
}



const search =  async (search, from ,to)=>{
    let result = await getAll();

    if (from == '' && to =='') {
        result.filter(x=> x.name.toLowerCase().includes(search.toLowerCase()));
    }
    else if (to =='') {
        result.filter(x=> x.name.toLowerCase().includes(search.toLowerCase()) && x.difficulty>= from);
    }
    else if (from == '') {
       result.filter(x=> x.name.toLowerCase().includes(search.toLowerCase()) && x.difficulty<= to);
    }
    else{
        result.filter(x=> x.name.toLowerCase().includes(search.toLowerCase()) && x.difficulty>= from && x.difficulty<= to);
    }   

    return result;
}

const attachAccessory = async (cubeId, accessoryId)=>{
    let cube = await Cube.findById(cubeId);
    let accessory = await Accessory.findById(accessoryId);
    
    cube.accessories.push(accessory);

    return cube.save();
};




const cubeService = {
    create,
    edit,
    getAll,
    getById,
    search,
    attachAccessory
};

module.exports = cubeService;