const express = require("express");

const Project = require("./model");

const router = express.Router();

router.get("/", (req, res) => {
  Project.getAllProjects()
    .then((project) => {
      res.status(200).json(project);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        errMessage: "Sorry, an error has occured with retrieving project",
      });
    });
});

router.get("/resources", (req, res) => {
  Resource.getAllResources()
    .then((resources) => {
      res.status(200).json(resources);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        errMessage: "Sorry, an error has occured with retrieving resources",
      });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  Project.getProjectById(id)
    .then((project) => {
      if (id) {
        res.status(200).json(project);
      } else {
        res.status(404).json({
          errMessage: "No project with that ID",
        });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        errMessage: "Sorry, no Project information can be found",
      });
    });
});

router.post("/", (req, res) => {
  Project.addProject(req.body)
    .then((project) => {
      res.json(project);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Failed to post new project. " });
    });
});

// router.get("/:id/ressup", (req, res) => {
//   const id = req.params.id;
//   Project.getResourcesForProject(id)
//     .then((all) => {
//       res.status(200).json(all);
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json({
//         errMessage: "Sorry, no information can be found",
//       });
//     });
// });

module.exports = router;
