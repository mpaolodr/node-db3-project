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

module.exports = {
  find,
  findById,
  findSteps
};
