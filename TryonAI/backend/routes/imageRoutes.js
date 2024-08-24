import express from 'express';
import multer from 'multer';
import Image from '../models/Image.js'; // Imports the Image model

const router = express.Router();

// Sets up multer to store the image in memory as a buffer
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// POST route for uploading image
router.post('/upload', upload.single('image'), async (req, res) => {
  try {
    // Extracts metadata from the request body
    const { clothId, clothTitle, clothSubtitle } = req.body;

    // Converts uploaded image file to a base64-encoded string
    const imageBuffer = req.file.buffer.toString('base64');
    const clothImageBuffer = req.file.buffer.toString('base64');

    // Creates a new image document with provided metadata and image data
    const newImage = new Image({
      clothId,
      clothTitle,
      clothSubtitle,
      image: imageBuffer,       // Stores base64 string in the 'image' field
      clothImage: clothImageBuffer, // Stores base64 string in the 'clothImage' field
    });

    // Saves new image document to the database
    await newImage.save();

    // Sends success response to the client
    res.status(201).json({ message: 'Image saved successfully!' });
  } catch (error) {
    // Handle errors and sends error response to the client
    res.status(500).json({ error: 'Error saving image' });
  }
});

export default router;
