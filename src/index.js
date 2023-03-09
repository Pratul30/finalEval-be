const express = require('express');
const app = express();
const port = 4000;
const cors = require('cors');
const fieldsRouter = require('./routes/fieldsRoutes')
const contentTypeRouter = require('./routes/contentTypeRoutes')
const entriesRouter = require('./routes/entriesRoutes')

app.use(express.json());
app.use(cors());
app.use('/fields', fieldsRouter);
app.use('/content-types', contentTypeRouter);
app.use('/entries', entriesRouter);

app.listen(port, () => {
  console.log(`started listening on port ${port}`);
});