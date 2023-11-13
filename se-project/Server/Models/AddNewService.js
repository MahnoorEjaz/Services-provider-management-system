const mongoose = require('mongoose');

const imageSchema1 = new mongoose.Schema({
    data: {
        type: String, // Store image data as binary
        required: true,
    }
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
    Gallary: [imageSchema1], // Array of images using the 'imageSchema'
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'MyUser', // Reference to the User model
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: { // Update this field when the service is updated     
        type: Date,
    },
    isActive: {
        type: Boolean,
        default: true,
    },
    NumberOfOrders:{
        type:Number,
        default:0,
    }
});
module.exports = mongoose.model('Service', serviceSchema);
