const jsonServer = require("json-server");
const server = jsonServer.create();
require("dotenv").config();
// const path = require("path");
// const express = require("express");
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults({
  static: "./build",
});
router.connect({
  databaseURL: process.env.DATABASE_URL,
});

const PORT = process.env.PORT || 3006;

server.use(middlewares);
// server.use(express.static(path.join(__dirname, "build")));

server.use("/api/", router);
// server.get("/*", function (req, res) {
//   res.sendFile(path.join(__dirname, "/../build/index.html"));
// });

// server.use(
//   jsonServer.rewriter({
//     "/api/*": "/$1",
//   })
// );
server.listen(PORT, () => {
  console.log("Server is running:", PORT);
});
