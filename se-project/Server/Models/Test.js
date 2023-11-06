const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
    ServiceTitle: {
        type: String,
    },
    Name: {
        type: String,
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Reference to the User model
    },
});

module.exports = mongoose.model('ServiceTest', serviceSchema);
