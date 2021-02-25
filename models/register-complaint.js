var mongoose = require('mongoose');
// tạo khung của bảng.
var Complaint = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim:true
    },
    company:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    date:{
        type: String,
        required: true
    },
    regarding:{
        type: String,
        required: true
    },
    nature:{
        type: String,
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
var ObjectModel = mongoose.model('Register Complaint',Complaint);
module.exports = ObjectModel;