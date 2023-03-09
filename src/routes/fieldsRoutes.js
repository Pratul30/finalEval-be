const express = require('express');
const entriesRouter = express.Router();

entriesRouter.get('/:id', getAllFieldsByContentTypeControllers);
entriesRouter.post('/:id', createFieldByContentTypeControllers);

module.exports = entriesRouter;