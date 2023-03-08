const express = require('express');
const app = express();
const port = 8080;
const cors = require('cors');
app.use(express.json());
app.use(cors());

app.listen(port, () => {
  console.log(`started listening on port ${port}`);
});