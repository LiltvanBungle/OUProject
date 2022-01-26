const sql = require("./db.js");

// constructor
const Case = function(aCase) {
  this.customer_id = aCase.customer_id;
  this.user = aCase.user_id;
  this.state = aCase.state;
  this.created = aCase.created;
  this.state_changed = aCase.state_changed;
  this.title = aCase.title;
  this.crmid = aCase.crmid;
};

Case.create = (newCase, result) => {
  sql.query("INSERT INTO cases SET ?", newCase, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created case: ", { id: res.insertId, ...newCase });
    result(null, { id: res.insertId, ...newCase });
  });
};

Case.findById = (case_id, result) => {
  sql.query(`SELECT * FROM cases WHERE id = ${case_id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found case: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Customer with the id
    result({ kind: "not_found" }, null);
  });
};

Case.getAll = result => {
  sql.query("SELECT * FROM cases", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("cases: ", res);
    result(null, res);
  });
};

Case.updateById = (id, aCase, result) => {
  sql.query(
    "UPDATE customers SET customer_id = ?, user_id = ?, state = ?, created = ?, state_changed = ?, title = ?, crmid = ?, WHERE id = ?",
    [aCase.customer_id, aCase.user, aCase.state, aCase.created, aCase.state_changed, aCase.title, aCase.crmid, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Customer with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated case: ", { id: id, ...aCase });
      result(null, { id: id, ...aCase });
    }
  );
};

Case.remove = (id, result) => {
  sql.query("DELETE FROM cases WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Customer with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted case with id: ", id);
    result(null, res);
  });
};

Case.removeAll = result => {
  sql.query("DELETE FROM cases", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} cases`);
    result(null, res);
  });
};

module.exports = Case;