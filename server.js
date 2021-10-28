const jsonServer = require("json-server");
const server = jsonServer.create();
const path = require("path");
const express = require("express");

const router = jsonServer.router("./db.json");

const middlewares = jsonServer.defaults();

const PORT = process.env.PORT || 3006;

server.use(middlewares);
server.use(express.static(path.join(__dirname, "build")));

server.use(router);
server.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "/../build/index.html"));
});

server.listen(PORT, () => {
  console.log("Server is running");
});
