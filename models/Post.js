const mongoose = require('mongoose');

const postSchema = mongoose.Schema({

    password: { type: String, require: true },
    mail: { type: String, require: true },
    users: [{ type: mongoose.Schema.Types.ObjectId ,ref:'User***'}]
})

module.exports = mongoose.model('User***', postSchema);