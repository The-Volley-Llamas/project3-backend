const multer = require("multer");

const cloudinary = require("../config/cloudinary.config");

module.exports = multer({ storage: cloudinary });
