const express = require("express");

const Project = require("./model");

const router = express.Router();

router.get("/", (req, res) => {
  Project.getAllTasks()
    .then((tasks) => {
      res.status(200).json(tasks);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        errMessage: "Sorry, an error has occured with retrieving tasks",
      });
    });
});

router.get("/fulltasks", (req, res) => {
  Project.getFullTasks()
    .then((tasks) => {
      res.json(tasks);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Failed to get tasks" });
    });
});
module.exports = router;
