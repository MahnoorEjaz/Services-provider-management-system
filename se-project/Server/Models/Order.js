const mongoose = require('mongoose');

// The schema for the collection and the data types of the collection
const Schema = mongoose.Schema({
    IDUserWhoPlaceOrder: {
        type: String, 
        required: true,
    },
    IDUserWhoGetOrder: {
        type: String,
        required: true,
    },
    Address: { // Address of the user who placed the order 
        type: String, 
        required: true,
    },
    ServiceID: {
        type: String,
        required: true,
    },
    Price: { // Price of the service when the order was placed
        type: Number,
        required: true,
    },
    Status: { // Status of the order there are three Statuses: Inprocess, Completed, Cancelled,Requested 
        type: String,
        required: true,
        enum: ["Inprocess", "Completed", "Cancelled", "Requested"] // enum means string objects User, Admin, Moderator
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
});

// Create the collection model
const Order = mongoose.model('Order', Schema);
module.exports = Order;
