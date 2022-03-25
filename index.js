const http = require("http");
const querystring = require("querystring");
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
  console.log("here is the url :", req.url);
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "OPTIONS, POST, GET",
    "Access-Control-Max-Age": 2592000, // 30 days
    "Content-Type": "application/json",
    /** add other headers as per requirement */
  };
  res.writeHead(200, headers);
  //response headers
  switch (req.url) {
    case "/hairstyles":
      const mhairs = await hairs.getHairTags(db);
      //response headers
      //set the response
      res.end(JSON.stringify(mhairs));
      //end the response
      break;
    case "/makeup":
      const makeup_tags = await makeup.getMakeupTags(db);
      //response headers
      //set the response
      res.end(JSON.stringify(makeup_tags));
      //end the response
      break;
      const musers_tags = await users.getUsers(db);
      //response headers
      //set the response
      res.end("matched perfect");
      //end the response
      break;
    case "/users/tags":
      const mtags = await users.getAllTags(db);
      //set the response
      res.end(JSON.stringify(mtags));
      //end the response
      break;

    case "/users":
      const musers = await users.getUsers(db);
      //set the response
      res.end(JSON.stringify(musers));
      //end the response
      break;
    default:
      if (req.url.match(/\api\/tag|(\?|\&)([^=]+)\=([^\&]+)/)) {
        try {
          let qs = req.url.split("?");
          let params = querystring.parse(qs[1]);
          user_tags = await hairs.getTag(db, params.type, params.tag);
          res.end(JSON.stringify(user_tags));
        } catch (e) {
          console.log("an error ocurred :", e);
        }
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
