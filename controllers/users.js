async function getAllTags(db) {
  /*tags belonging to a specific user*/
  let sql = `SELECT DISTINCT name name FROM tags
           ORDER BY name`;

  return new Promise((resolve, reject) => {
    db.all(sql, [], (err, rows) => {
      if (err) {
        reject(err);
      }

      resolve(rows);
    });

    // close the database connection
    db.close();
  });
}

async function getUserTags(id, db) {
  /*tags belonging to a specific user*/
  let sql = `SELECT DISTINCT username name FROM users
           ORDER BY username`;

  return new Promise((resolve, reject) => {
    db.all(sql, [], (err, rows) => {
      if (err) {
        reject(err);
      }

      resolve(rows);
    });

    // close the database connection
    db.close();
  });
}

async function getUsers(db) {
  let sql = `SELECT DISTINCT username name FROM users
           ORDER BY username`;

  let users = [];
  return new Promise((resolve, reject) => {
    db.all(sql, [], (err, rows) => {
      if (err) {
        reject(err);
      }

      resolve(rows);
    });

    // close the database connection
    db.close();
  });
}

exports.getUserTags = getUserTags;
exports.getUsers = getUsers;
exports.getAllTags = getAllTags;
