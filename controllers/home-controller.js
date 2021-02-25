const Product = require('../models/product');
require('mongoose-paginate-v2');
exports.home = async function (req, res) {
    const filter = {
        status: 1
    }
    const selling = {
        limit: 4,
        sort: {price: 1}
    }
    const feature = {
        limit: 4,
        sort: {price : -1}
    }
    const sellingProduct = await Product.paginate(filter, selling)
    const featureProduct = await Product.paginate(filter, feature)
    const data = {
        sellingProduct: sellingProduct.docs,
        featureProduct: featureProduct.docs,
        user: req.session.user,


    }
    res.render('index', {data: data})
}