const express = require("express"); // To Import Express FrameWork
const {
  getAllTask,
  createTask,
  editTask,
  deleteTask,
  eachTask,
} = require("../controller/taskController");

// ======================================================================================

const router = express.Router(); // To create a New Router Instance.

router.get("/", getAllTask); //This is to route to get all Tasks, handled by the getAllTask function.

router.post("/create", createTask); // Route to create a new task, handled by createTask function

router.patch("/:id", editTask); // Route to edit a specific task by its ID, handled by editTask function in controller where the main functions are.

router.delete("/:id", deleteTask); // Route to delete a specific task by its ID also handled by deleteTask function from controller where the main functions are.

router.get ("/:id", eachTask); // Route to get the specific task by its ID handles bu the eachTask function controller.

// =======================================================================================
// NOTE vvvv "module.export should always be at the end of your code just like javascript"
module.exports = router; // Export the router to be used in the main server file app.js
