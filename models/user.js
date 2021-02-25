var mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
// tạo khung của bảng.
var Users = new mongoose.Schema({
    firstname:{
        type: String,
        required: true,
    },
    lastname:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    date:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    user:{
        type: String,
        required: true,
        unique:true
    },
    thumbnail:{
        type: String
    },
    password:{
        type: String,
        required: true
    },
    salt:{
        type:String
    },
    type:{
        type: Number, //1 . Users || 2 . Admin
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
        type:Number, //1.Acvite | 0.Draft | -1.Deleted
        default: 1
    }
});
//đăng ký bảng.
Users.plugin(mongoosePaginate);
var ObjectModel = mongoose.model('users',Users);
module.exports = ObjectModel;