const express = require("express");
var cors = require("cors");
const bodyParser = require("body-parser");
const api = express();
const db = require("./sqlite");

api.use(cors());
api.use(bodyParser.json());
api.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

console.log("Setting up Database");
db.setup();

api.listen(3000, () => {
  console.log("Server started ...");
});

api.get("/pets", async (req, res) => {
  console.log("Getting all pets");
  var data = await db.getPets();
  console.log(data);
  res.status(200);
  res.send(data);
});

api.post("/pets", (req, res) => {
  console.log("Storing new pet");
  console.log(req.body);
  db.createPet({
    name: req.body.name,
    male: req.body.is_male,
    date_of_birth: req.body.date_of_birth,
    microchip_number: req.body.microchip_number,
    img_url: req.body.img_url,
  });
  res.status(201);
  res.send(req.body);
});
