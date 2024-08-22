// Middleware in Back-End Development is like a "middle man"/ connector that sits between the incoming request form the client and the final response from the server. Its a function that can modify the request, process it handle certain task before the passing it onto the next part of the code or sending back a response // Its a middle man between the request and the response (e.g for handling errors) 

const notFound = (req, res) => {
    res.json ({message: "Route Not Found"})
};

module.exports = notFound;