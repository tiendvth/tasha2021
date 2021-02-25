var mongoose = require('mongoose');
// tạo khung của bảng.
var Schema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        trim:true
    },
    thumbnail:{
        type: String
    },
    description:{
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
var ObjectModel = mongoose.model('categories',Schema);
module.exports = ObjectModel;