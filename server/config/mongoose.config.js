// this is where we use mongoose to connect to the database
const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/jokes_db", {
    useNewUrlParser: true,

})
    .then(() => console.log("Established a connection to the database"))    // if connection works                                      
    .catch(err => console.log("Something went wrong when connecting to the database", err)); // if connection fails



