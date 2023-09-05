const mongoose = require("mongoose");

let MediaFileSchema = new mongoose.Schema({
    fileName: {
        type: String,
        required: true,
        unique: true
    },
    fileType: {
        type: String,
        required: true,
        unique: true
    },
    fileLocation: {
        type: String,
        required:true
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
})

module.exports = mongoose.model('MediaUpload', MediaFileSchema);