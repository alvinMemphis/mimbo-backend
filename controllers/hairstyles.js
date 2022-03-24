async function getTag(db, type, tag) {
  let sql = `SELECT DISTINCT name name FROM tags WHERE type='${type}' AND name='${tag}'
           ORDER BY name`;

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

async function getHairTags(db) {
  let sql = `SELECT DISTINCT name name FROM tags WHERE type='hairstyle'
           ORDER BY name`;

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

exports.getHairTags = getHairTags;
