const express = require("express");

const ProjRouter = require("./RM/router");
const ResRouter = require("./RM/ResRouter");
const TaskRouter = require("./RM/TaskRouter");

const server = express();

server.use(express.json());

server.use("/api/projects", ProjRouter);
server.use("/api/resources", ResRouter);
server.use("/api/tasks", TaskRouter);

server.get("/", (req, res) => {
  res.send("General get request for server root");
});

module.exports = server;
