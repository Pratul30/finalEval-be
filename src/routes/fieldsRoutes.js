const express = require('express');
const fieldsRouter = express.Router();
const { getAllFieldsControllers, getAllFieldsByContentTypeControllers, createFieldByContentTypeControllers } = require('../controllers/fieldsControllers');

fieldsRouter.get('/', getAllFieldsControllers);
fieldsRouter.get('/:id', getAllFieldsByContentTypeControllers);
fieldsRouter.post('/:id', createFieldByContentTypeControllers);

module.exports = fieldsRouter;