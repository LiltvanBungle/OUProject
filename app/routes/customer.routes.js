module.exports = app => {
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
  };