var mongoose = require('mongoose');
// tạo khung của bảng.
var Feedback = new mongoose.Schema({
    firstname:{
        type: String,
        required: true,
    },
    lastname:{
        type: String,
        required: true
    },
    email:{
        type: String,
        unique: true,
        required: true
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
var ObjectModel = mongoose.model('feedback',Feedback);
module.exports = ObjectModel;