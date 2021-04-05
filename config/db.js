// import Book from '../models/book';
const mongoose = require('mongoose');
const { default: Book } = require("../models/book");

// async function connectDB = () => {
//     try {
//         //database Name
//         const databaseName='googlebooks';
//         const con = await mongoose.connect(`mongodb://127.0.0.1:27017/${databaseName}`, { 
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//         useCreateIndex: true
//     });
//         console.log(`Database connected : ${con.connection.host}`)
//     } catch (error) {
//         console.error(`Error: ${error.message}`)
//         process.exit(1)
//     }
// }
const connectDB = async () => {
    try {
        //database Name
        const databaseName='googlebooks';
        const con = await mongoose.connect(`mongodb://127.0.0.1:27017/${databaseName}`, { 
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    });
        console.log(`Database connected : ${con.connection.host}`)
    } catch (error) {
        console.error(`Error: ${error.message}`)
        process.exit(1)
    }
    }

// module.exports = connection;

// const connectDB = function() {
//      connection();
// }
module.export = connectDB;