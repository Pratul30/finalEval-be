const express = require('express');
contentTypeRouter = express.Router();
const { getAllContentTypesControllers, createContentTypeControllers } = require('../controllers/contentTypeControllers');

contentTypeRouter.get('/', getAllContentTypesControllers);
contentTypeRouter.post('/', createContentTypeControllers);

module.exports = contentTypeRouter;