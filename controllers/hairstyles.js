async function getHairTags(db) {
  let sql = `SELECT DISTINCT name hair_tags FROM hair_styles
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
