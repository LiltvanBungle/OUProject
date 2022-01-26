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

    const customers = require("../controllers/customer.controller.js");
  
    // Create a new Customer
    app.post("/customers", customers.create);
  
    // Retrieve all Customers
    app.get("/customers", customers.findAll);
  
    // Retrieve a single Customer with customer_id
    app.get("/customers/:customer_id", customers.findOne);
  
    // Update a Customer with customerId
    app.put("/customers/:customer_id", customers.update);
  
    // Delete a Customer with customerId
    app.delete("/customers/:customer_id", customers.delete);
  
    // Delete all
    app.delete("/customers", customers.deleteAll);

    const notes = require("../controllers/note.controller.js");
  
    // Create a new note
    app.post("/notes", notes.create);
  
    // Retrieve all notes
    app.get("/notes", notes.findAll);
  
    // Retrieve a single note with note_id
    app.get("/notes/:note_id", notes.findOne);
  
    // Update a note with noteId
    app.put("/notes/:note_id", notes.update);
  
    // Delete a note with noteId
    app.delete("/notes/:note_id", notes.delete);
  
    // Delete all
    app.delete("/notes", notes.deleteAll);

    const users = require("../controllers/user.controller.js");
  
    // Create a new user
    app.post("/users", users.create);
  
    // Retrieve all users
    app.get("/users", users.findAll);

    // Retrieve all active/inactive users
    //app.get("/users/:active", users.findAct);

    // Retrieve all users with access level
    //app.get("/users/:access_level", users.findAcc);
  
    // Retrieve a single user with user_id
    //app.get("/users/:user_id", users.findOne);

    // Retrieve a single user with user_name
    app.get("/users/:user_name", users.findName);
  
    // Update a user with userId
    app.put("/users/:user_id", users.update);
  
    // Delete a user with userId
    app.delete("/users/:user_id", users.delete);
  
    // Delete all
    app.delete("/users", users.deleteAll);
  };