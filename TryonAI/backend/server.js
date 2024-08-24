import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import imageRoutes from './routes/imageRoutes.js'; 

const app = express();

// Middleware setup
app.use(bodyParser.json({ limit: '10mb' })); // Parsing JSON bodies with a size limit of 10MB
app.use(cors()); // Enabling Cross-Origin Resource Sharing (CORS) for all routes

// MongoDB connection setup
mongoose.connect('mongodb://localhost:27017/virtualTryOn', {
  useNewUrlParser: true, // Using new URL string parser
  useUnifiedTopology: true, // Using new topology engine for connections
});

// Handling MongoDB connection events
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:')); // Logging connection errors
db.once('open', () => {
  console.log('Connected to MongoDB'); // Confirming successful connection
});

// Setting up routes
app.use('/api/images', imageRoutes); // Using the imageRoutes for the /api/images endpoint

// Server setup
const PORT = process.env.PORT || 5000; // Setting the server port (default is 5000)
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`); // Logging the port on which the server is running
});
