const jsonServer = require("json-server");
const server = jsonServer.create();
// require("dotenv").config();
const path = require("path");
const express = require("express");
const middlewares = jsonServer.defaults({ static: "./build" });
const router = jsonServer.router("./db.json");
const PORT = process.env.PORT || 3006;

// router.connect({
//   databaseURL: process.env.DATABASE_URL,
// });
server.use("/*", middlewares, router);
server.use(express.static(path.join(__dirname, "./build")));

server.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "./build", "index.html"));
});
// server.use(middlewares);

server.use(router);

server.listen(PORT, () => {
  console.log("Server is running:", PORT);
});
