var express = require("express");
var router = express.Router();
const bodyParser = require("body-parser");
const db = require("../model/helper");

router.use(bodyParser.json());

router.get("/", (req, res) => {
  res.send("Welcome to the API");
});

router.get("/todos", async (req, res) => {
  // get todos
  try {
    const results = await db("SELECT * FROM items ORDER BY id ASC;");
    res.send(results.data);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.post("/todos", async (req, res) => {
  // create todo
  // req.body => { complete: false, text: "clean room" }
  try {
    await db(
      `INSERT INTO items (complete, text) VALUES (${req.body.complete}, '${req.body.text}')`
    );
    const results = await db("SELECT * FROM items ORDER BY id ASC;");
    res.status(201).send(results.data);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.put("/todos/:todo_id", async (req, res) => {
  // update todo
  try {
    await db(
      `UPDATE items set complete=${req.body.complete}, text='${req.body.text}' where id=${req.params.todo_id}`
    );
    const results = await db("SELECT * FROM items ORDER BY id ASC;");
    res.status(200).send(results.data);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.delete("/todos/:todo_id", async (req, res) => {
  // delete todo
  try {
    await db(`DELETE FROM items where id=${req.params.todo_id}`);
    const results = await db("SELECT * FROM items ORDER BY id ASC;");
    res.status(200).send(results.data);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
