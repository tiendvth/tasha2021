var mongoose = require('mongoose');
// tạo khung của bảng.
var Contact = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim:true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    content:{
        type: String,
        required: true
    },
    created_at:{
        type: Date
    },
    updated_at: {
        type: Date
    },
    deleted_at: {
        type: Date
    },
    status:{
        type:Number //1.Acvite | 0.Draft | -1.Deleted
    }
});
//đăng ký bảng.
var ObjectModel = mongoose.model('contact',Contact);
module.exports = ObjectModel;