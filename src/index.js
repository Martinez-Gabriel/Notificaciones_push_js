require("dotenv").config();

const path = require("path");
const morgan = require("morgan");
const express = require("express");

const app = express();

//Middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
//Routes
app.use(require("./routes/index"));
//Static Content
app.use(express.static(path.join(__dirname, "public")));

const port = 3001;
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto http://localhost:${port}`);
});
