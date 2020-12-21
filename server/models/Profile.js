const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const profileSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    address: String,
    phoneNumber: String,
    gender: String,
    country: String
});

module.exports = mongoose.model('Profile', profileSchema);
