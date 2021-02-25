const User = require('../models/user');
const md5 = require('md5')
require('mongoose-paginate-v2');
exports.getList = async function (req, res) {
    let filter = {
        status: 1
    };
    const option = {
        page: req.query.page ? req.query.page : 1,
        limit: req.query.limit ? req.query.limit : 9,
    };
    const listUser = await User.paginate(filter,option);
    const data = {
        title : 'TASHA Store Admin | List Users'
    }
    res.render('admin/users/list', {
        listUser: listUser.docs,
        page: listUser.page,
        data: data,
        user: req.session.user
    });

}

exports.create = function (req, res) {
    const data = {
        title : 'TASHA Store Admin | Add User'
    }
    res.render('admin/users/form', {data: data,user: req.session.user});
}

exports.store = async function (req, res) {
    let obj = new User(req.body);
    obj.creatAt = Date();
    obj.type = 2
    obj.salt = Math.random().toString(36).substring(7);
    obj.password = md5(obj.password + obj.salt);
    await obj.save();
    // console.log(obj)
    res.redirect('/admin/users/list');
}

exports.getDetail = async function (req, res) {
    const userDetail = await User.findById(req.params.id);
    const data = {
        title : 'TASHA Store Admin | User Detail',
        userDetail: userDetail
    }
    res.render('admin/users/detail', {data : data, user: req.session.user});
}

exports.edit = async function (req, res) {
    const userEdit = await User.findById(req.params.id);
    const data = {
        userEdit: userEdit,
        title : 'TASHA Store Admin | Edit User'
    }
    res.render('admin/users/edit', {data: data, user: req.session.user});
}

exports.update = async function (req, res) {
    await User.findByIdAndUpdate(req.params.id, req.body);
    res.redirect('/admin/users/list');
}

// xoá cứng
// exports.delete = function (req, resp) {
//     User.findByIdAndDelete(req.params.id, req.body, function (err, data) {
//         resp.redirect('/admin/users/list');
//     })
// }

// xoá không cứng, xoá mềm.
exports.deleteMaKhongDelete = async function (req, res) {
    let updateInfor = {
        status: -1
    }
    await User.findByIdAndUpdate(req.params.id, updateInfor);
    res.redirect('/admin/users/list');
}


