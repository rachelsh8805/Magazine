const mongoose=require('mongoose');
const userSchema=mongoose.Schema({
    userName: { type: String, require: true },
    password: { type: String, require: true },
    mail: { type: String, require: true },
    magazine: { type: mongoose.Schema.Types.ObjectId, ref: 'Magazine***' },
    post: { type: mongoose.Schema.Types.ObjectId, ref: 'Post***' }
})
module.exports = mongoose.model('Magazine***', userSchema);
 