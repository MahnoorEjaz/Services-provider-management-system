const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const messageSchema = new Schema({
    IDUserWhoSendMessage: {
        type: Schema.Types.ObjectId,
        ref: 'MyUser', // Reference to the User model
    },
    IDUserWhoGetMessage: {
        type: Schema.Types.ObjectId,
        ref: 'MyUser', // Reference to the User model
    },
    UserMessage: {
        type: String,
        required: true,
    },
    Status: {
        type: String,
        enum: ['Send', 'Received'],
    },
    Image: {
        type: String,
    },
    Name: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    isActive: {
        type: Boolean,
        default: true,
    },
}); 
module.exports = mongoose.model('Chat', messageSchema);
