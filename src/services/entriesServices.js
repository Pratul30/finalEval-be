const { Entries } = require('../../database/models');

const getAllEntriesServices = async () => {
    try {
        const data = await Entries.findAll();
        if(data.length === 0){
            return 'No entries found';
        }
        return data[0].dataValues;
    } catch (e) {
        throw new Error(e);
    }
}

const getEntryByContentTypeServices = async (id) => {
    try {
        const data = await Entries.findAll({
            where: {
                cTypeId: id
            }
        });
        return data;
    } catch (e) {
        throw new Error(e);
    }
}

const createEntryByContentTypeServices = async (id, field) => {
    try {
        const data = await Entries.create({
            cTypeId: id,
            fields: field
        });
        return data;
    } catch (e) {
        throw new Error(e);
    }
}

module.exports = {
    getAllEntriesServices,
    getEntryByContentTypeServices,
    createEntryByContentTypeServices
}