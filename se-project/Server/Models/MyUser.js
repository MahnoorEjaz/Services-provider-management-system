const mongoose = require('mongoose');
// The schema for the collection and the data types of the collection
const AdminSchema = mongoose.Schema({
    Name: {
        type: String,
        required: true,
    },
    Email: {
        type: String,
        require: true,
    },
    Password: {
        type: String,
        require: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
    },
    isActive: {
        type: Boolean,
        default: true,
    },
    ProfileImage: {
        type: String,
        default: 'https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png',
    },
}
);

// Create the collection model
const User = mongoose.model('MyUser', AdminSchema);
module.exports = User;



// Path: Routes/User.js