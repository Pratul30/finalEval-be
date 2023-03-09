const { v4: uuidv4 } = require('uuid');
const { CTypes } = require('../../database/models');

const getAllContentTypesServices = async () => {
    try{
    const data = await CTypes.findAll();
    return data;
    } catch (err) {
        throw new Error(err);
    }
}

const createContentTypeServices = async (name) => {
    const contentTypeId = uuidv4();
    try{
    const data = await CTypes.create({
        cTypeName: name,
        cTypeId: contentTypeId
    });
    return data;
}
    catch (err) {
        throw new Error(err);
    }
}

module.exports = {
    getAllContentTypesServices,
    createContentTypeServices
}