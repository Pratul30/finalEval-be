const { Fields } = require('../../database/models');

const getAllFieldsServices = async (req, res) => {
    try{
    const data = await Fields.findAll();
    const fields = data[0].dataValues;
    return fields;
    } catch (err) {
        throw new Error(err);
    }
}

const getAllFieldsByContentTypeServices = async (id) => {
    try{
    const data = await Fields.findAll({
        where: {
            cTypeId: id
        }
    });
    return data;
}
    catch (err) {
        throw new Error(err);
    }
}

const createFieldByContentTypeServices = async (id, attributes) => {
    try{
    const data = await Fields.create({
        cTypeId: id,
        attributes: attributes
    });
    return data;
}
    catch (err) {
        throw new Error(err);
    }
}


module.exports = {
    getAllFieldsServices,
    getAllFieldsByContentTypeServices,
    createFieldByContentTypeServices
}