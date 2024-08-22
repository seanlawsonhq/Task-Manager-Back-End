require("dotenv").config(); // Load environment variables from a .env file into process.env


// ===============================IMPORTATIONS================================================//

const express = require("express"); // To import Express FrameWork.

const mongoose = require("mongoose") // Import Mongoose for MongoDB interactions

const cors = require("cors");

const app = express (); // Start/ Spin up the Express Framework server.

const port = 3000; // Define the Port number for the server.

const taskRouter = require("./routes/taskRouter"); //(To import the task router for task related routes.)

const notFound = require("./middlewares/notFound"); //(Import a middleware to handle 404 notFound Errors)

// CORS (Cross-Origin-Resource-Sharing) when the frontend and backend are from different origins (domains, ports or protocols) and the back-end hasn't been configured to accept requests from the front end origin

app.use (cors());

// =============================================================================================//

// NOTE app.use is a middleware

app.use (express.json ()) ;// This is a Middleware to parse (penetrate) incoming JSON requests from postman allowing access to the req.body (NOTE .json ends with a smooth bracket"()")

app.use("/api/task", taskRouter); // Mount the taskRouter at /api/task, all task-related routes starts with/api/task

app.use (notFound); // Use the custom 404 Middleware for handling unmatched routes.

// =============================================================================================//

const start = async ()=> {
    try {
        //Attempting to connect to MongoDB using Mongoose
        await mongoose.connect (process.env.MONGO_URI);
        console.log("Database Connected");
    
        // This is to Start the server and listen on the specified port.
        app.listen(port, () => {console.log(`Server is running on PORT ${port}`);
    });
    } catch (error) {
        // To lOG the error if you have any and if the database connection fails
        console.log(error);
        console.log("Unable to Connect");
        
    }
};
start ();

// Mongoose is an ODM (Object Data Modelling). Its a Library for MongoDB (database) and Node.js (Language)

// MongoDB IS A NoSQL database that stores data in a flexible, JSON LIKE FORMAT (Like an API OR OBJECT Format).

//MongoDB Username and Password=============================================================//

// Username: seanlawson164us
// Password: rsoB3TowI3olEWgC
// mongodb+srv://seanlawson164us:rsoB3TowI3olEWgC@cluster0.zvipi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0



// =====================================