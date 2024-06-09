import express from 'express';
import multer from 'multer';
import Image from '../models/Image.js'; 


const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });


router.post('/upload', upload.single('image'), async (req, res) => {
  try {
    const { clothId, clothTitle, clothSubtitle } = req.body;
    const imageBuffer = req.file.buffer.toString('base64');

    const newImage = new Image({
      clothId,
      clothTitle,
      clothSubtitle,
      image: imageBuffer,
    });

    await newImage.save();
    res.status(201).json({ message: 'Image saved successfully!' });
  } catch (error) {
    res.status(500).json({ error: 'Error saving image' });
  }
});

export default router;
