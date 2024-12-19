const multer = require("multer");
const path = require("path");

// Configure Multer storage
const Storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Specify the upload directory
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname); // Set a unique filename
  },
});

// Multer instance with storage configuration
const uploadImage = multer({
  storage: Storage,
  fileFilter: (req, file, cb) => {
    const fileTypes = /jpeg|jpg|png|gif/; 
    const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
    const mimeType = fileTypes.test(file.mimetype);

    if (mimeType && extname) {
      return cb(null, true);
    } else {
      cb(new Error("Only images are allowed!"));
    }
  },
});

// Function for single image upload
const uploadSingleImage = uploadImage.single("image"); 

// Function for multiple images upload
const uploadMultipleImages = uploadImage.array("images", 5);

module.exports = {
  uploadSingleImage,
  uploadMultipleImages,
};
