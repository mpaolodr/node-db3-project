const db = require("../data/db-config.js");

function find() {
  return db("schemes");
}

function findById(id) {
  return db("schemes")
    .where({ id })
    .first();
}

function findSteps(id) {
  return db("steps as st")
    .join("schemes as sc", "sc.id", "st.scheme_id")
    .select("st.id", "sc.scheme_name", "st.step_number", "st.instructions")
    .orderBy("st.step_number")
    .where("sc.id", id);
}

function add(scheme) {
  return db("schemes")
    .insert(scheme)
    .then(id => {
      // because id is an array
      return findById(id[0]);
    });
}

module.exports = {
  find,
  findById,
  findSteps,
  add
};
