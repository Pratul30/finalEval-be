const { getAllFieldsServices, getAllFieldsByContentTypeServices, createFieldByContentTypeServices } = require('../services/fieldServices');

const getAllFieldsControllers = async (req, res) => {
    try{
    const data = await getAllFieldsServices();
    return res.status(200).json(data);
    } catch (e) {
        res.status(500).json({
            message: e.message
        });
    }
}

const getAllFieldsByContentTypeControllers = async (req, res) => {
    try{
    const { id } = req.params;
    const data = await getAllFieldsByContentTypeServices(id);
    return res.status(200).json(data);
    } catch (e) {
        res.status(500).json({
            message: e.message
        });
    }
}

const createFieldByContentTypeControllers = async (req, res) => {
    try{
    const { id } = req.params;
    const { attributes } = req.body;
    const data = await createFieldByContentTypeServices(id, attributes);
    return res.status(200).json(data);
    } catch (e) {
        res.status(500).json({
            message: e.message
        });
    }
}

module.exports = {
    getAllFieldsControllers,
    getAllFieldsByContentTypeControllers,
    createFieldByContentTypeControllers
}