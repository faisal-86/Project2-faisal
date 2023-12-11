const express = require('express');
const multer = require('multer');
const Image = require('./models/Image'); // Assuming the model is in a separate file

const router = express.Router();
const upload = multer({ dest: 'uploads/' }); // Destination folder for uploaded images


router.post('/upload', upload.single('image'), async (req, res) => {
  const { filename, path } = req.file;

  const newImage = new Image({
    filename,
    path
  });

  try {
    await newImage.save();
    res.status(201).send('Image uploaded and metadata saved');
  } catch (err) {
    res.status(500).send('Error uploading image');
  }
});

// Route for retrieving images
router.get('/images', async (req, res) => {
  try {
    const images = await Image.find();
    res.json(images);
  } catch (err) {
    res.status(500).send('Error fetching images');
  }
});

