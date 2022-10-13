const express = require("express");
const app = express();
var cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/user");
const contentRoutes = require("./routes/content");

mongoose
  .connect(
    `mongodb+srv://Shifff:BLBF7uDrQ4a582AV@cluster0.dndi49g.mongodb.net/?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

app.use(express.json());
app.use(cors());
app.use("/api/user", userRoutes);
app.use("/api/content", contentRoutes);

module.exports = app;
