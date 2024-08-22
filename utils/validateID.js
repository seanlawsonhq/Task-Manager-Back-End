// Utils is the short for utilities which refers to a collection of helper functions or models designed to perform common task on multiple functions.

// These Tasks often includes things like Data validation, formatting or other repetitive operations that are used across different part of the application.

const mongoose = require ("mongoose");  // To Import mongoose

const validateId = (id) => {
    // TO Utilize function to validate MongoDB ObjectIDs
    const isValid = mongoose.Types.ObjectId.isValid (id); // Check if the ID is a valid MongoDB objectID
    return isValid; // Return the validation result
};

module.exports =validateId; // Export the function to be used in the Controller folder