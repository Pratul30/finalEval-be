const { getAllFieldsServices, getAllFieldsByContentTypeServices, createFieldByContentTypeServices } = require('../services/fieldServices');

const getAllFieldsControllers = async (req, res) => {
    try{
    const data = await getAllFieldsServices();
    return res.status(200).json(data);
    } catch (e) {
        res.status(500).json(e);
    }
}

const getAllFieldsByContentTypeControllers = async (req, res) => {
    try{
    const { id } = req.params;
    const data = await getAllFieldsByContentTypeServices(id);
    return res.status(200).json(data);
    } catch (e) {
        res.status(500).json(e);
    }
}

const createFieldByContentTypeControllers = async (req, res) => {
    try{
    const { id } = req.params;
    const { field } = req.body;
    const data = await createFieldByContentTypeServices(id, field);
    return res.status(200).json(data);
    } catch (e) {
        res.status(500).json(e);
    }
}

module.exports = {
    getAllFieldsControllers,
    getAllFieldsByContentTypeControllers,
    createFieldByContentTypeControllers
}