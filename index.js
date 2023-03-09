const express = require('express');
const app = express();
const port = 8080;
const cors = require('cors');
const fieldsRouter = require('./src/routes/fieldsRoutes')

app.use(express.json());
app.use(cors());
app.use('/fields', fieldsRouter);

app.listen(port, () => {
  console.log(`started listening on port ${port}`);
});