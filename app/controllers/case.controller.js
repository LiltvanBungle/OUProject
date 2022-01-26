const Case = require("../models/case.model.js");

// Create and Save a new Case
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty."
    });
  }

  // Create a Case
  const aCase = new Case({
    customer_id: req.body.customer_id,
    user_id: req.body.user_id,
    state: req.body.state,
    created: req.body.created,
    state_changed: req.body.state_changed,
    title: req.body.title,
    crmid: req.body.crmid
 });

  // Save Case in the database
  Case.create(aCase, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "An error occurred while creating the Case."
      });
    else res.send(data);
  });
};

// Retrieve all cases from the database.
exports.findAll = (req, res) => {
  Case.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "An error occurred while retrieving cases."
      });
    else res.send(data);
  });
};

// Find a single Case with a case_id
exports.findOne = (req, res) => {
  Case.findById(req.params.case_id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Case with id ${req.params.case_id}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Case with id " + req.params.case_id
        });
      }
    } else res.send(data);
  });
};

// Update a Case identified by the case_id in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  console.log(req.body);

  Case.updateById(
    req.params.case_id,
    new Case(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Case with id ${req.params.case_id}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating Case with id " + req.params.case_id
          });
        }
      } else res.send(data);
    }
  );
};

// Delete a Case with the specified case_id in the request
exports.delete = (req, res) => {
  Case.remove(req.params.case_id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Case with id ${req.params.case_id}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete Case with id " + req.params.case_id
        });
      }
    } else res.send({ message: `Case was deleted successfully!` });
  });
};

// Delete all cases from the database.
exports.deleteAll = (req, res) => {
  Case.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all cases."
      });
    else res.send({ message: `All cases were deleted successfully!` });
  });
};