const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const routes = require("./routes/index");
const app = express();

app.set("port", process.env.PORT || 3000);
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(routes);

module.exports = app;
