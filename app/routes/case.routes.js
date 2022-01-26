module.exports = app => {
    const cases = require("../controllers/case.controller.js");
  
    // Create a new case
    app.post("/cases", cases.create);
  
    // Retrieve all cases
    app.get("/cases", cases.findAll);
  
    // Retrieve a single case with case_id
    app.get("/cases/:case_id", cases.findOne);
  
    // Update a case with caseId
    app.put("/cases/:case_id", cases.update);
  
    // Delete a case with caseId
    app.delete("/cases/:case_id", cases.delete);
  
    // Delete all
    app.delete("/cases", cases.deleteAll);
  };