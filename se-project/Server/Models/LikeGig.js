const mongoose = require('mongoose');

const likeGigSchema = new mongoose.Schema({
  UserID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  ServiceID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Service',
    required: true
  },
  like: {
    type: Boolean,
    default: false
  }
});




const LikeGig = mongoose.model('LikeGig', likeGigSchema);
module.exports = LikeGig;
