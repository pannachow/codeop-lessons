const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const data = require("./data/pokemon.js");

app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE"),
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
  res.contentType("application/json");
  next();
});

app.get("/pokemon", function(req, res) {
  res.send(data);
});

app.get("/pokemon/:id", function(req, res) {
  for (let i = 0; i < data.length; i++) {
    if (parseInt(data[i].id) === parseInt(req.params.id)) {
      return res.send(data[i]);
    }
  }
  res.status(404).send("Pokemon does not exist");

  /*
  const pokemon = data.find(e => parseInt(e.id) === parseInt(req.params.id))

  if (!pokemon) {
    res.status(404).send('Pokemon does not exist');
  }
  res.send(pokemon);
  */
});

app.get("/pokemon/:id/attacks", function(req, res) {
  const pokemon = data.find(e => parseInt(e.id) === parseInt(req.params.id));

  if (!pokemon) {
    res.status(404).send("resource does not exist");
    return;
  }
  res.send(pokemon.attacks);
});

app.post("/pokemon", function(req, res) {
  const pokemon = data.find(e => parseInt(e.id) === parseInt(req.body.id));

  if (pokemon) {
    res.status(409).send("resource exists");
  } else {
    data.push(req.body);
    res.status(201).send(req.body);
  }
});

app.put("/pokemon/:id", function(req, res) {
  const i = data.findIndex(e => parseInt(e.id) === parseInt(req.params.id));

  if (i === -1) {
    res.status(404).send("resource does not exist");
  } else {
    data.splice(i, 1, req.body);
    res.status(200).send(req.body);
  }
});

app.delete("/pokemon/:id", function(req, res) {
  const i = data.findIndex(e => parseInt(e.id) === parseInt(req.params.id));

  if (i === -1) {
    res.status(404).send("resource does not exist");
  } else {
    const pokemon = data[i];
    data.splice(i, 1);
    res.status(200).send(pokemon);
  }
});

app.get("/", function(req, res) {
  res.send("Hello world");
});

app.listen(3000);
console.log("Listening on port 3000...");
