const Category = require('../models/category');

exports.getList = async function (req, res) {
    const listCategory = await Category.find({status: 1});
    const data = {
        listCategory: listCategory,
        title : 'TASHA Store Admin | List Categories'

    }
    res.render('admin/categories/list', {data:data,user: req.session.user});
}

exports.create = function (req, res) {
    const data = {
        title : 'TASHA Store Admin | Add Category'
    }
    res.render('admin/categories/form', {data: data,user: req.session.user});
}

exports.store = async function (req, res) {
    // let obj = new Category({
    //     title : req.body.title,
    //     content : req.body.content,
    //     thumbnail : req.body.thumbnail,
    //     status : req.body.status,
    // });
    let obj = new Category(req.body);
    await obj.save();
    res.redirect('/admin/categories/list');
}

exports.getDetail = async function (req, res) {
    const cateDetail = await Category.findById(req.params.id);
    const data = {
        title : 'TASHA Store Admin | Category Detail',
        cateDetail : cateDetail
    }
    res.render('admin/categories/detail', {data: data, user: req.session.user});
}

exports.edit = async function (req, res) {
    const cateEdit = await Category.findById(req.params.id);
    const data = {
        title : 'TASHA Store Admin | Category Edit',
        cateEdit: cateEdit
    }
    res.render('admin/categories/edit', {data: data, user: req.session.user});

}

exports.update = async function (req, res) {
    await Category.findByIdAndUpdate(req.params.id, req.body);
    res.redirect('/admin/categories/list');

}

// xoá cứng
// exports.delete = function (req, resp) {
//     Category.findByIdAndDelete(req.params.id, req.body, function (err, data) {
//         resp.redirect('/admin/categories/list');
//     })
// }

// xoá không cứng, xoá mềm.
exports.deleteMaKhongDelete = async function (req, res) {
    let updateInfor = {
        status: -1
    }
    await Category.findByIdAndUpdate(req.params.id, updateInfor);
    res.redirect('/admin/categories/list');
}


