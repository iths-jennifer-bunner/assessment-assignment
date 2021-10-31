const jsonServer = require("json-server");
const server = jsonServer.create();
const middlewares = jsonServer.defaults({ static: "./build" });
const router = jsonServer.router("./db.json");
const PORT = process.env.PORT || 3006;

server.use(middlewares);
server.use(
  jsonServer.rewriter({
    "/api/*": "/$1",
  })
);
server.use(router);

server.listen(PORT, () => {
  console.log("Server is running:", PORT);
});
