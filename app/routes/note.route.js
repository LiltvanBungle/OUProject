module.exports = app => {
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
  };