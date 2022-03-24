const http = require("http");

const host = "127.0.0.1";
const port = "3000";

const sqlite3 = require("sqlite3").verbose();
const users = require("./controllers/users");
const hairs = require("./controllers/hairstyles");
const makeup = require("./controllers/makeup");
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
    case "/makeup":
      const makeup_tags = await makeup.getMakeupTags(db);
      //response headers
      res.writeHead(200, { "Content-Type": "application/json" });
      //set the response
      res.end(JSON.stringify(makeup_tags));
      //end the response
      break;
      const musers_tags = await users.getUsers(db);
      //response headers
      res.writeHead(200, { "Content-Type": "application/json" });
      //set the response
      res.end("matched perfect");
      //end the response
      break;
    case "/users/tags":
      const mtags = await users.getAllTags(db);
      //response headers
      res.writeHead(200, { "Content-Type": "application/json" });
      //set the response
      res.end(JSON.stringify(mtags));
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
      if (req.url.match(/\/users\/[0-9]+\/tags\/*$/)) {
        res.writeHead(200, { "Content-Type": "application/json" });
        //set the response
        //end the response
        user_id = req.url.split("/")[2];
        user_tags = await users.getUserTags(user_id, db);
        res.end(JSON.stringify(user_tags));
      } else {
        res.writeHead(200, { "Content-Type": "application/json" });
        //set the response
        res.write("Route not found");
        //end the response
        res.end();
      }
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
