const express = require("express");
var cors = require("cors");
const app = express();
app.use(cors());

const routes = require("./routes");

const port = 8081;

app.use(express.json());

app.use("/api", routes);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

module.exports = app;
