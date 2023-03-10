const express = require('express');
const fieldsRouter = express.Router();
const { getAllFieldsControllers, getAllFieldsByContentTypeControllers, createFieldByContentTypeControllers,updateFieldByContentTypeControllers } = require('../controllers/fieldsControllers');

fieldsRouter.get('/', getAllFieldsControllers);
fieldsRouter.get('/:id', getAllFieldsByContentTypeControllers);
fieldsRouter.post('/:id', createFieldByContentTypeControllers);
fieldsRouter.post('/update/:id', updateFieldByContentTypeControllers)

module.exports = fieldsRouter;