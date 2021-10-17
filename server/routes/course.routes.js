module.exports = app => {
    const course = require("../controllers/course.controller.js");
  
    // Create a new course
    app.post("/course", course.create);
  
    // Retrieve all course
    app.get("/course", course.findAll);
  
    // Retrieve a single course with course_code
    app.get("/course/:course_code", course.findOne);
  
    // Update a course with course_code
    app.put("/course/:course_code", course.update);
  
    // Delete a course with course_code
    app.delete("/course/:course_code", course.delete);
  
    // Create a new course
    app.delete("/course", course.deleteAll);
  };