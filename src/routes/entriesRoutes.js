const express = require('express')
const entriesRouter = express.Router();

const { getAllEntriesControllers, getEntryByContentTypeControllers, createEntryByContentTypeControllers } = require('../controllers/entriesControllers');

entriesRouter.get('/', getAllEntriesControllers);
entriesRouter.get('/:id', getEntryByContentTypeControllers);
entriesRouter.post('/:id', createEntryByContentTypeControllers);

module.exports = entriesRouter;