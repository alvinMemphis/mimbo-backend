const http = require("http");

const host = "127.0.0.1";
const port = "3000";

const sqlite3 = require("sqlite3").verbose();
const users = require("./controllers/users");
const hairs = require("./controllers/hairstyles");
let db = new sqlite3.Database(
  "./db/sqlite.db",
  sqlite3.OPEN_READWRITE,
  (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log("Connected to the in-memory SQlite database.");
  }
);

const server = http.createServer(async (req, res) => {
  switch (req.url) {
    case "/hairstyles":
      const mhairs = await hairs.getHairTags(db);
      //response headers
      res.writeHead(200, { "Content-Type": "application/json" });
      //set the response
      res.end(JSON.stringify(mhairs));
      //end the response
      break;
    case "/makeup_tags":
      const makeup_tags = await users.getUsers(db);
      //response headers
      res.writeHead(200, { "Content-Type": "application/json" });
      //set the response
      res.end(JSON.stringify(makeup_tags));
      //end the response
      break;
    case "/users/tags":
      const musers_tags = await users.getUsers(db);
      //response headers
      res.writeHead(200, { "Content-Type": "application/json" });
      //set the response
      res.end(JSON.stringify(musers));
      //end the response
      break;
    case "/users":
      const musers = await users.getUsers(db);
      //response headers
      res.writeHead(200, { "Content-Type": "application/json" });
      //set the response
      res.end(JSON.stringify(musers));
      //end the response
      break;
    default:
      res.writeHead(200, { "Content-Type": "application/json" });
      //set the response
      res.write("Hi there, This is a Vanilla Node.js API");
      //end the response
      res.end();
  }
});

server.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`);
});

process.on("SIGTERM", () => {
  db.close((err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log("Close the database connection.");
  });
});
