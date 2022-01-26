module.exports = app => {
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