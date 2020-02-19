const oxs = require("object-exchange-server");
const express = require("express");
require('dotenv').config();

let port = process.env.PORT || 8080;
const app = express();
app.use((new oxs.default()).router);
app.listen(port, () => console.log(`object-exchange-server listening on port ${port}!`));