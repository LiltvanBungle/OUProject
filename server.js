const express = require("express");
const cors = require("cors");
const app = express();

// parse requests of content-type: application/json
app.use(express.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use(cors());

require("./app/routes/all.routes.js")(app);

// simple route
app.get("*", (req, res) => {
  res.set('Access-Control-Allow-Origin', '*')
  res.json({ message: "Server running." });
});

// set port, listen for requests
app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});