// In back-end development, a model is like a blue print for the data in your application. It defines the structure of your data and how it interact with the database.

const mongoose = require("mongoose"); // To Import Mongoose

const schema = mongoose.Schema; // Shortcut to access Mongoose Schema class


//Defining the shcema for the task based on the UI

const taskSchema = new schema ({
    title: String, //This represents the Title of the task
    description: String, // This represents the Description of the task
    tag: String, // This on represents the Tag associated with the task "urgent or important"
});


module.exports = mongoose.model ("task", taskSchema); 
// Export the model to be used for Request Operations in the controller.