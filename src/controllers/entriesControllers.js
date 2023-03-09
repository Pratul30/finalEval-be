const { getAllEntriesServices, getEntryByContentTypeServices, createEntryByContentTypeServices } = require('../services/entriesServices');

const getAllEntriesControllers = async (req, res) => {
    try{
    const data = await getAllEntriesServices();
    return res.status(200).json(data);
    } catch (e) {
        res.status(500).json({
            message: e.message
        });
    }
}

const getEntryByContentTypeControllers = async (req, res) => {
    try{
    const { id } = req.params;
    const data = await getEntryByContentTypeServices(id);
    return res.status(200).json(data);
    } catch (e) {
        res.status(500).json({
            message: e.message
        });
    }
}

const createEntryByContentTypeControllers = async (req, res) => {
    try{
    const { id } = req.params;
    const { field } = req.body;
    const data = await createEntryByContentTypeServices(id, field);
    return res.status(200).json(data);
    } catch (e) {
        res.status(500).json({
            message: e.message
        });
    }
}

module.exports = {
    getAllEntriesControllers,
    getEntryByContentTypeControllers,
    createEntryByContentTypeControllers
}