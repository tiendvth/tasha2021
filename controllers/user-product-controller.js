const Product = require('../models/product');
const Category = require('../models/category');
require('mongoose-paginate-v2');
const mongoose = require('mongoose');
exports.Product = async function (req, res) {
    let filter = {
        status: 1
    };
    if (req.query.categoryId && req.query.categoryId != 0) {
        filter.categoryId = mongoose.Types.ObjectId(req.query.categoryId);
    }
    let keyword = '';
    if (req.query.keyword && req.query.keyword.length > 0) {
        keyword = req.query.keyword;
        filter['text'] = {
            $search: keyword
        }
    }
    const option = {
        page: req.query.page ? req.query.page : 1,
        limit: req.query.limit ? req.query.limit : 9,
    };
    const listCategory = await Category.find({status: 1});
    const listProduct = await Product.paginate(filter,option);
    const data = {
        listProduct: listProduct.docs,
        user: req.session.user,
        listCategory: listCategory,
        SelectcategoryId: req.query.categoryId,
        limit: listProduct.limit,
        page: listProduct.page,
        keyword: keyword
    };
    res.render('products', {data:data});
}
exports.getDetail = async function (req, res) {
    const detail = await Product.findById(req.params.id);
    const data = {
        user: req.session.user,
        detail: detail
    }
    res.render('product_details', { data:data});
}