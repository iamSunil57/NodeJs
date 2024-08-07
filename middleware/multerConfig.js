const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // File Type Validation:
    const allowedFileTypes = ["image/png", "image/jpeg", "image/jpg"];
    if (!allowedFileTypes.includes(file.mimetype)) {
      cb(new Error("This file type is not supported"));
      return;
    }
    cb(null, "./storage");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname); // "sunil" + file.originalname
  },
});
// Define the size limit (e.g., 1 MB)
const limits = {
  fileSize: 1 * 1024 * 1024, // 1 MB in bytes
};

// Create multer instance with storage and limits options
const upload = multer({ storage: storage, limits: limits });

module.exports = { upload };

module.exports = { storage, multer };
