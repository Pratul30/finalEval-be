const { Fields } = require('../../database/models');

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

const createFieldByContentTypeServices = async (id, field) => {
    try{
    const data = await Fields.create({
        fieldName: field.name,
        cTypeId: id,
        attributes: field.attributes
    });
    return data;
}
    catch (err) {
        throw new Error(err);
    }
}