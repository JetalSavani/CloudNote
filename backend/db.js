const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://jetalsavani55:2nVgKEy6EN0UFGox@cluster0.uiq2jhe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

// MongoDB Atlas Connection
const connectToMongo = async () => {
    try {
        await mongoose.connect(mongoURI, {});
        console.log('Database is connected');
    } catch (err) {
        console.error('Error connecting to the database:', err);
        process.exit(1);
    }
};

module.exports = connectToMongo;