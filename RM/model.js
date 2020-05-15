const db = require("../data/dbConfig");
module.exports = {
  getAllProjects,
  getProjectById,
  getAllResources,
  addResource,
  addProject,
  getAllTasks,
  getFullTasks,
  //   getResourcesForProject,
};
function getAllProjects() {
  return db.select("*").from("project");
}
function getAllTasks() {
  return db.select("*").from("tasks");
}
function getProjectById(id) {
  let query = db("project as p");
  return query.where("p.id", id).first();
}

function getAllResources() {
  return db.select("*").from("resources");
}

function addResource(resource) {
  return db("resources")
    .insert(resource, "id")
    .then(([id]) => getAllResources());
}
function addProject(project) {
  return db("project")
    .insert(project, "id")
    .then(([id]) => getAllProjects());
}

function getFullTasks(id) {
  return db("tasks")
    .select(
      "project.id",
      "project.name",
      "project.description",
      "tasks.description",
      "tasks.notes"
      //   "tasks.description",
      //   "tasks.notes",
      //   "project.name",
      //   "project.description",
      //   "project.id"
    )
    .join("project", "project.id", "tasks.project_id");
}
// function getResourcesForProject(id) {
//   return db("project_resources")
//     .join("resources", "resources.id", "project_resources.resources_id")
//     .join("project", "project.id", "project_resources.project_id")
//     .select("project.name", "resources.name")
//     .where({ "project_resources.project_id": id });
// }
