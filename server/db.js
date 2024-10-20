// Import mongoose
const mongoose = require('mongoose');

// Connection URI (replace <username>, <password>, <dbname>, and <cluster-url> with your details)
const uri = 'mongodb+srv://dbuser:root123@cluster0.g0mfn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

// Connect to the MongoDB database
const connectDB = async () => {
    try {
        await mongoose.connect(uri,);
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1); // Exit process with failure
    }
};

// Export the connection function
module.exports = connectDB;

//mongodb+srv://dbuser:<db_password>@cluster0.g0mfn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0