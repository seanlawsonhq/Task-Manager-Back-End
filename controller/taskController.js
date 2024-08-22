// A controller in Back-End is like a manager that handles the logic for specific part of your application
// It decides what should happen when a request comes in & coordinate between the request, your data and response.
//NOTE: response (res) request (req)

const Task = require("../models/task");
const validateId = require("../utils/validateID");

// 1.============FUNCTION TO GET ALL THE TASKS===USING REQ AND RES=======To FIND======

const getAllTask = async (req, res) => {
  const tasks = await Task.find({}); // Retrieve all tasks from the database
  res.status(200).json({ tasks }); //  send the retrieved tasks in a JSON response // code 200 means you open a new page
};

// 2.======================FUNCTION FOR CREATING A NEW TASK====== to Create===========

const createTask = async (req, res) => {
  const { title, description, tag } = req.body; // This destructure the required fields from the request body

  if (!title) {
    return res.status(400).json({ message: "Please Provide a Title" });
  }
  if (!description) {
    return res.status(400).json({ message: "Please Provide a Description" });
  }
  if (!tag) {
    return res.status(400).json({ message: "Please Choose a Tag" });
  }

  const task = await Task.create(req.body); // create a new task with the request data.

  res.status(201).json({ message: "Task Created successfully", task }); // Sends a status code with a message of "task created successfully". (code 201 means you have successfully created a task).
};

//3. =========FUNCTION FOR EDITING an existing Task== (to one one and Update)============

const editTask = async (req, res) => {
  const { id } = req.params; // Get the task Id from the request parameters

  if (!validateId(id)) {
    return res.status(400).json({ message: `ID: ${id} is not valid` });
  }

  const task = await Task.findOneAndUpdate({ _id: id }, { ...req.body }); // This code here updates the Task with the provided Data.
  res.status(200).json({ message: "Task Updated Successfully" }); // Send the success message if updated successfully
};

//4. =================FUNCTION to DELETE an Existing Task=============================

const deleteTask = async (req, res) => {
  const { id } = req.params; // Get the task ID from the requested parameter

  if (!validateId(id)) {
    return res.status(400).json({ message: `ID: ${id} is not valid` });
  }
  
  const task = await Task.findOneAndDelete({ _id: id }); // Delete the task with the special ID
  res.status(200).json({ message: " Task successfully Deleted" }); // Send success message if Deletion is successful
};

// =======================FUNCTION TO GET EACH TASK===================================

const eachTask = async (req, res) => {
  const { id } = req.params; // Use to get the Task ID from the request parameter.

  if (!validateId(id)) {
    return res.status(400).json({ message: `ID: ${id} is not valid` });
  }

  const task = await Task.findOne({ _id: id }); // Find the task with the specified ID
  res.status(200).json({ task }); // Send the found task in JSON response
};
// ===========================================================================================
// FUNCTION FOR TESTING WHETHER YOUR Input or error codes works or Not as you where the CLIENT======

module.exports = { getAllTask, createTask, editTask, deleteTask, eachTask }; // Export the controller functions to be used in the router to be used in the main server file. app.js
