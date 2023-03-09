const { getAllContentTypesServices, createContentTypeServices } = require('../services/contentTypeServices');

const getAllContentTypesControllers = async (req, res) => {
    try{
    const data = await getAllContentTypesServices();
    return res.status(200).json(data);
    } catch (e) {
        res.status(500).json(e);
    }
}

const createContentTypeControllers = async (req, res) => {
    try{
    const { name } = req.body;
    const data = await createContentTypeServices(name);
    return res.status(200).json(data);
    } catch (e) {
        res.status(500).json(e);
    }
}

module.exports = {
    getAllContentTypesControllers,
    createContentTypeControllers
}