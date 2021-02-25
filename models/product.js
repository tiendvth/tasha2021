var mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
// tạo khung của bảng.
var Product = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    thumbnails:
        {
            type: String,
            required: true
        },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        trim: true
    },
    categoryId: {
        type: mongoose.Schema.ObjectId
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
    status: {
        type: Number //1.Acvite | 0.Draft | -1.Deleted
    }
});
Product.plugin(mongoosePaginate);
Product.index({title:'text',description:'text'});
//đăng ký bảng.
var ObjectModel = mongoose.model('products', Product);
module.exports = ObjectModel;