module.exports = app => {
    const student = require("../controllers/student.controller.js");

    // Create a new students
    app.post("/students", student.create);

    // Retrieve all students
    app.get("/students", student.findAll);

    // Retrieve a single students with students_code
    app.get("/students/:Reg_num", student.findOne);

    // Update a students with students_code
    app.put("/students/:Reg_num", student.update);

    // Delete a students with students_code
    app.delete("/students/:Reg_num", student.delete);

    // Create a new students
    app.delete("/students", student.deleteAll);
};