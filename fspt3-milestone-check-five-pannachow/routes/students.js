const express = require("express");
const router = express.Router();
const db = require("../model/helper");

// GET student list
router.get("/", async (req, res, next) => {
  try {
    const results = await db("SELECT * FROM students;");
    res.send(results.data);
  } catch (err) {
    res.status(500).send(err);
  }
});

// GET one student
router.get("/:id", async (req, res, next) => {
  //your code here
});

// INSERT a new student into the DB
router.post("/", async (req, res, next) => {
  if (!req.body.firstname || !req.body.lastname) {
    res.status(400).send("Please insert data!");
    return;
  }
  try {
    await db(
      `INSERT INTO students (firstname, lastname) VALUES ('${req.body.firstname}', '${req.body.lastname}')`
    );
    const results = await db("SELECT * FROM students;");
    res.status(201).send(results.data);
  } catch (err) {
    res.status(500).send(err);
  }
});

// DELETE a student from the DB
router.delete("/:id", async (req, res, next) => {
  try {
    await db(`DELETE FROM students where id=${req.params.id}`);
    const results = await db("SELECT * FROM students;");
    res.status(200).send(results.data);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
