const db = require("../data/dbConfig");

module.exports = {
  getShows,
  getById,
  addShow,
  removeShow,
};

function getShows() {
  return db("tvshows");
}
function getById(id) {
  return db("tvshows").where(id);
}

function addShow(newPerson) {
  return db("tvshows").insert(newPerson);
}

function removeShow(id) {
  return db("tvshows").where(id).delete();
}