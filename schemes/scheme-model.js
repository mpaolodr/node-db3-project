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
    .insert(scheme, "id")
    .then(id => {
      // because id is an array
      return findById(id[0]);
    });
}

function update(changes, id) {
  return db("schemes")
    .where({ id })
    .update(changes)
    .then(updated => {
      return findById(id);
    });
}

function remove(id) {
  return db("schemes")
    .where({ id })
    .then(found => {
      return db("schemes")
        .where({ id })
        .del()
        .then(deleted => {
          if (deleted) {
            return found;
          } else {
            return null;
          }
        });
    });
}

module.exports = {
  find,
  findById,
  findSteps,
  add,
  update,
  remove
};
