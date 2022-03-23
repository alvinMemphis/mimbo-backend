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

exports.getUsers = getUsers;
