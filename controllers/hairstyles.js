async function postTag(db, type, tag) {
  let sql = `SELECT DISTINCT name name FROM tags WHERE type='${type}' AND name LIKE '%${tag}' ORDER BY name`;

  let users = [];

  return new Promise((resolve, reject) => {
    db.all(sql, [], (err, rows) => {
      if (err) {
        reject(err);
      }
      if (rows.length > 0) {
        resolve(rows);
      } else {
        if (type === "hairstyle" || type === "makeup") {
          new_sql = `INSERT INTO tags (type,name) VALUES (?, ?)`;

          db.run(new_sql, [type, tag], (err) => {
            if (err) {
              reject(err.message);
            }

            resolve("new valuesaved");
          });
        } else {
          reject("incorrect type ");
        }
      }
    });
  });
}

async function getTag(db, type, tag) {
  let sql = `SELECT DISTINCT name name FROM tags WHERE type='${type}' AND name LIKE '%${tag}' ORDER BY name`;

  let users = [];

  return new Promise((resolve, reject) => {
    db.all(sql, [], (err, rows) => {
      if (err) {
        reject(err);
      }
      resolve(rows);
    });
  });
}

async function getHairTags(db) {
  let sql = `SELECT DISTINCT name name FROM tags WHERE type='hairstyle' ORDER BY name`;

  let users = [];
  return new Promise((resolve, reject) => {
    db.all(sql, [], (err, rows) => {
      if (err) {
        reject(err);
      }

      resolve(rows);
    });

    // close the database connection
  });
}

exports.getHairTags = getHairTags;
exports.getTag = getTag;
