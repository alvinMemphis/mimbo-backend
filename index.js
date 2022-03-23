const http = require("http");

const host = "127.0.0.1";
const port = "3000";

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World ");
});

const sqlite3 = require("sqlite3").verbose();
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
