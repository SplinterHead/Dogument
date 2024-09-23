const sqlite3 = require("sqlite3");
const db = new sqlite3.Database("dogument.db");

const initialisePets = `
CREATE TABLE IF NOT EXISTS pets (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name STRING,
  is_male BOOLEAN,
  date_of_birth DATE,
  microchip_number INTEGER,
  img_url STRING
);`;

function writeDb(queryString) {
  db.serialize(function () {
    db.run(queryString);
  });
}

function readDb(queryString) {
  return new Promise((resolve, reject) => {
    db.all(queryString, function (err, rows) {
      resolve(rows);
    });
  });
}

module.exports = {
  setup: function () {
    writeDb(initialisePets);
  },

  // Pets
  createPet: function (pet) {
    var query = `
      INSERT INTO pets (name, is_male, date_of_birth, microchip_number, img_url)
      VALUES ('${pet.name}', '${pet.is_male}', '${pet.date_of_birth}', '${pet.microchip_number}', '${pet.img_url}');
    `;
    writeDb(query);
  },

  getPets: async function () {
    var query = "SELECT * FROM pets ORDER BY id DESC;";
    let dbData = await readDb(query);
    return dbData;
  },

  getPet: async function (id) {
    var query = "SELECT * FROM pets where id IS " + id + ";";
    let dbData = await readDb(query);
    return dbData;
  },
};
