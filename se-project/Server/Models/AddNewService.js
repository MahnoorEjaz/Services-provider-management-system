const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
    data: {
        type: Buffer, // Store image data as binary
    },
    contentType: {
        type: String, // MIME type of the image (e.g., 'image/jpeg')
    },
});
const serviceSchema = new mongoose.Schema({
    ServiceTitle: {
        type: String,
        required: true,
    },
    BasicPrice: {
        type: Number,
        required: true,
    },
    Tags: [String], // Array of strings
    ServiceType: String,
    Description: String,
    Gallary: [imageSchema], // Array of images using the 'imageSchema'
    createdBy: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', // Reference to the User model
    },
});
module.exports = mongoose.model('Service', serviceSchema);
